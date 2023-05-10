<template>
  <section class="register auth">
    <form class="form-register" @submit.prevent="registerUser">
      <h3>Авторизация</h3>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Ваш E-Mail" v-model.trim="form.email" :class="$v.form.email.$error ? 'is-invalid' : ''"/>
      </div>
      <div class="form-group">
        <b-icon
          class="show-pass"
          :icon="showPassword ? 'eye-slash-fill' : 'eye-fill'"
          @click="showPassword = !showPassword"
          :class="$v.form.password.$error ? 'is-hidden' : ''"
        />
        <input :type="showPassword ? 'text' : 'password'" class="form-control" placeholder="Ваш пароль" v-model.trim="form.password" :class="$v.form.password.$error ? 'is-invalid' : ''"/>
      </div>
      <div class="form-bottom">
        <div class="form-btn">
          <button type="submit" class="btn btn-primary">Войти</button>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  data() {
    return {
      showPassword: false,
      showIconPassword: true,
      form: {
        email: '',
        password: '',
      },
    };
  },
  validations: {
    form: {
      email: {
        required, 
        email
      },
      password: {
        required, 
        minLength: minLength(3)
      },
    },
  },
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    ...mapActions(['postUser']),
    registerUser() {
      this.$v.form.$touch()

      if(this.$v.form.$error) {
        console.log('Validation false')
      } else {
        const formData = {
          email: this.form.email,
          password: this.form.password,
        };
        this.postUser(formData);
        console.log(formData)
      }
      
    },
  },
};
</script>


<style scoped lang="scss">
  .register {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .form-register {
    background: rgba(255, 255, 255, 0.06);
    padding: 60px 40px;
    max-width: 550px;
    width: 100%;
    border-radius: 10px;
    color: white;
  }

  .auth {
    h3 {
      font-size: 30px;
      margin-bottom: 50px;
      text-align: center;
    }
  }

  .form-group {
    margin-bottom: 15px;
    position: relative;

    input {
      padding: 12px 20px;
      font-size: 18px;
    }
  }

  .show-pass {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    width: 20px;
    font-size: 30px;
    &.is-hidden {
      display: none;
    }
    
  }

  .form-check {
    font-size: 16px;
    // margin: 20px 0;
    // padding: 10px 20px;
    user-select: none;
  }

  .form-btn {
    margin-right: 30px;
    button {
      padding: 12px 40px;
      font-size: 18px;
    }
  }

  .form-bottom {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 0 0 0;
  }
</style>