<template>
  <section class="register auth">
    <form class="form-register" @submit.prevent="registerUser">
      <h3>Регистрация</h3>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Ваш ник" v-model="form.name">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Ваш E-Mail" v-model="form.email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Ваш пароль" v-model="form.password">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Подвердите пароль" v-model="form.confirm">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
      </div>
      <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
    </form>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { required, email, sameAs } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirm: '',
      },
    };
  },
  computed: {
    ...mapGetters(['getUser']),
      isFormValid() {
        return !this.$v.$invalid;
      },
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required
    },
    password: {
      required
    },
    confirmPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    ...mapActions(['postUser']),
    registerUser() {
      const formData = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        confirm: this.form.confirm,
      };

      if (this.isFormValid) {
        this.postUser(formData);
        // return
      }
        // return
      // if(formData) {
      //   console.log('Good', formData);
      // }
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
</style>