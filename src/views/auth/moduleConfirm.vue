<template>
  <div class="pincode">
    <h1>Введите код потверждения</h1>
    <pincode-input
      v-model="$v.code.$model"
      :length="6"
      class="pincode-input"
      @input="sendConfirm"
      v-focus
    />
    <div class="timer" v-if="time">{{ formattedTimeData }}<span>секунд</span></div>
    <div class="time-text" v-else>Код отправлен!</div>
    <button class="btn_get--code" v-if="!time && formattedTimeData" @click.prevent="getCode">Запросить код повторно</button>
  </div>
</template>

<script>
  import axios from 'axios'
  import PincodeInput from 'vue-pincode-input';
  import { validationMixin } from 'vuelidate';
  import { required, minLength } from 'vuelidate/lib/validators';
  export default {
    mixins: [validationMixin],
    directives: {
      focus: {
        inserted(el) {
          el.focus
        }
      }
    },
    components: {
      PincodeInput
    },
    data() {
      return {
        code: '',
        isButtonDisabled: false,
        time: 0,
        interval: null,
        isTimerActive: false,
        formattedTimeData: '0'
      }
    },
    validations: {
      code: {
        required,
        minLength: minLength(6),
      }
    },
    methods: {
      startTimer() {
        this.isTimerActive = true;

        const lockTime = localStorage.getItem('lockTime')
        const currentTime = new Date().getTime();
        this.time = lockTime - currentTime

        this.interval = setInterval(() => {
          this.time -= 1000

          if(this.time <= 0) {
            this.stopTimer();
          } else {
            localStorage.setItem('remainingTime', this.time);
            console.log('Good')
          }
        }, 1000)

      },
      stopTimer() {
        this.isTimerActive = false;
        this.time = 0;
        clearInterval(this.interval)
        localStorage.removeItem('locTime')
        localStorage.removeItem('remainingTime')
      },
      async getCode() {
        const response = await axios.post('register/code');
        if(response.status === 200) {
          const currentTime = new Date().getTime();
          const lockTime = localStorage.getItem('lockTime');

          if (lockTime && currentTime < lockTime) {
            this.startTimer();
          } else {
            const newLockTime = currentTime + 30000;
            localStorage.setItem('lockTime', newLockTime);
            this.startTimer();
          }
        } else {
          console.log('no ok')
        }
      },
      async sendConfirm() {
        if (this.$v.code.$model.length === 6) {
          await axios.post('register/confirm', { code: this.code });
        }
      },
    },
    watch: {
      time(newTime) {
        const seconds  = Math.ceil(newTime / 1000);
        this.formattedTimeData = `${seconds}`
      }
    },
    created() {
    const lockTime = localStorage.getItem('lockTime');
    const currentTime = new Date().getTime();

      if (lockTime && currentTime < lockTime) {
        this.isButtonDisabled = true;
        this.time = lockTime - currentTime;
        this.startTimer();
      }
    }
  }
</script>

<style lang="scss">
.pincode {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 67px);

  h1 {
    color: #fff;
    margin-bottom: 60px;
  }

}

input.vue-pincode-input {
  height: 100px;
  min-width: 100px;
  font-size: 35px;
  background-color: #ffffff3b;
  color: #fff;

  &:-ms-input-placeholder {
    color: #fff;
  }
  &::-webkit-input-placeholder {
    color: #fff;
  }
}

.timer {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  padding: 40px 0 20px 0;
  color: rgb(70, 172, 255);

  span {
    font-size: 30px;
    font-weight: 400;
    padding-left: 10px;
    color: rgba(159, 209, 250, 0.575);
  }
}

.btn_get--code {
  background-color: transparent;
  border: none;
  font-size: 22px;
  color: white;
  transition: all .3s ease;
  position: relative;
  padding-bottom: 2px;
  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    border-bottom: 2px solid #fff;
    content: '';
    transition: all .3s ease;
    pointer-events: none;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
}

.time-text {
  font-size: 30px;
  color: white;
  padding: 40px 0 20px 0;
  color: #8ff77a;
}

</style>