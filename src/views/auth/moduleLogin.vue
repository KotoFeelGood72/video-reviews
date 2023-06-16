<template>
  <section class="register auth">
    <form class="form-register" @submit.prevent="login">
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
  methods: {
    async login() {
      const formData = {
        email: this.form.email,
        password: this.form.password
      }
      this.$v.form.$touch()
      if(!this.$v.form.$error) {
        this.$store.dispatch('signin', formData);
      } else {
        console.log('Validation false')
      }
    },

  },
};
</script>


