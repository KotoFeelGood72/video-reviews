<template>
  <div class="pincode">
    <h1>Введите код потверждения</h1>
    <pincode-input
      v-model="$v.code.$model"
      placeholder="0"
      :length="6"
      class="pincode-input"
      @input="sendConfirm"
    />
  </div>
</template>

<script>
  import axios from 'axios'
  import PincodeInput from 'vue-pincode-input';
  import { validationMixin } from 'vuelidate';
  import { required, minLength } from 'vuelidate/lib/validators';
  export default {
    mixins: [validationMixin],
    components: {
      PincodeInput
    },
    data() {
      return {
        code: '',
      }
    },
    validations: {
      code: {
        required,
        minLength: minLength(6),
      }
    },
    methods: {
      async sendConfirm() {
        if(this.$v.code.$model.length === 6) {
          const response = await axios.post('register/confirm', this.code)
          console.log('Good', response)
        }
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

</style>