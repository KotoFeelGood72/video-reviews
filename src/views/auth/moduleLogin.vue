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
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
      </div>
      <button type="submit" class="btn btn-primary">Войти</button>
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
    box-shadow: 0 0 20px 0 #ccc;
    padding: 60px 20px;
    max-width: 500px;
    width: 100%;
    border-radius: 10px;
  }

  .auth {
    h3 {
      font-size: 30px;
      margin-bottom: 20px;
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
    font-size: 18px;
    margin: 20px 0;
    user-select: none;
  }
</style>