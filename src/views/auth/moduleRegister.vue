<template>
  <section class="max-w-[470px] w-full bg-gray-700">
    <form class="form-register" @submit.prevent="registerUser">
      <div class="form-header flex items-start justify-between bg-blue-600 bg-opacity-50 text-white">
        <div class="p-4">
          <h3>Welcome Back !</h3>
          <p>Sign in to continue to Skote.</p>
        </div>
        <div class="max-w-[176px]">
          <img :src="require('@/assets/img/profile.png')" alt="">
        </div>
      </div>
      <div class="rounded-full flex items-center justify-center w-[74px] h-[74px] -mt-8 z-20 bg-gray-600 ml-4 mb-6">
        <img :src="require('@/assets/img/logo.svg')" width="34">
      </div>
      <div class="px-5">
        <div class="form-group py-2">
          <label for="" class="text-white opacity-40 text-sm mb-1 block">Email</label>
          <input type="email" class="form-control w-full px-2 py-2.5 bg-gray-600 rounded-md text-sm font-semibold border-2 border-transparent focus:outline-none focus:border-primary text-white" placeholder="Ваш E-Mail" v-model.trim="form.email" :class="$v.form.email.$error ? 'is-invalid' : ''"/>
        </div>
        <div class="form-group py-2 relative">
          <div
            class="absolute top-[66%] right-3 -translate-y-[50%] cursor-pointer"
            @click="showPassword = !showPassword"
            >
            <GlobalIcon
              class="show-pass"
              :icon="showPassword ? 'mdi:eye-off' : 'ic:round-remove-red-eye'"
              width="21"
              height="21"
              color="white"
              :class="$v.form.password.$error ? 'is-hidden' : ''"
            />
          </div>
          <label for="" class="text-white opacity-40 text-sm mb-1 block">Password</label>
          <input :type="showPassword ? 'text' : 'password'" class="form-control w-full px-2 py-2.5 bg-gray-600 rounded-md text-sm font-semibold border-2 border-transparent focus:outline-none focus:border-primary text-white" placeholder="Ваш пароль" v-model.trim="form.password" :class="$v.form.password.$error ? 'is-invalid' : ''"/>
        </div>
        <div class="form-group py-2 mb-6">
          <label for="" class="text-white opacity-40 text-sm mb-1 block">Confirm password</label>
          <input :type="showPassword ? 'text' : 'password'" class="form-control w-full px-2 py-2.5 bg-gray-600 rounded-md text-sm font-semibold border-2 border-transparent focus:outline-none focus:border-primary text-white" placeholder="Подвердите пароль" v-model.trim="form.confirm" :class="$v.form.confirm.$error ? 'is-invalid' : ''"/>
        </div>
        <div class="default-check mb-3">
          <input type="checkbox" id="remember" class="hidden">
          <label for="remember" class="text-white cursor-pointer">
            <p class="text-opacity-40">Remember me</p>
            <GlobalIcon icon="mdi:check" width="15" height="15"/>
          </label>
        </div>
        <div class="form-btn mb-10">
          <button type="submit" class="btn bg-primary text-white text-sm py-2.5 px-12 w-full rounded-md duration-300 hover:bg-opacity-80">Зарегистрироваться</button>
        </div>
        <div>
          <p class="text-white font-semibold text-sm mb-5 text-center">Sign in width</p>
          <ul class="flex items-center justify-center -mr-4 mb-6">
            <li v-for="item in social" :key="item.name" class=" mr-4">
              <a :href=item.link>
                <GlobalIcon :icon="item.icons"/>
              </a>
            </li>
          </ul>
          <div class="mb-10">
            <router-link to="/" class="flex items-center justify-center">
              <GlobalIcon icon="mdi:lock" width="13" height="13" color="#f2f2f2" class="mr-3 -mb-.2"/>
              <p class="text-sm text-sm text-white text-opacity-70">Forgot your password</p>
            </router-link>
          </div>
        </div>
      </div>
    </form>
  </section>

</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators';

export default {
    mixins: [validationMixin],
    data() {
        return {
            showPassword: false,
            showIconPassword: true,
            social: [
              { icons: 'logos:facebook', link: '#'},
              { icons: 'skill-icons:twitter', link: '#'},
              { icons: 'devicon:google', link: '#'},
            ],
            form: {
                name: "",
                email: "",
                password: "",
                confirm: "",
            },
        };
    },
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(3)
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(3)
            },
            confirm: {
                required,
                minLength: minLength(3),
                sameAsPassword: sameAs("password"),
            }
        },
    },
    methods: {
        registerUser() {
            this.$v.form.$touch();
            if (this.$v.form.$error) {
                console.log("Validation false");
            }
            else {
                const formData = {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password,
                    confirm: this.form.confirm,
                };
                this.$store.dispatch("register", formData);
                console.log(formData);
            }
        },
    },
};
</script>




<style lang="scss">

.default-check {
  input {
    display: none;
    &:checked + {
      & label:before {
        background-color: #556ee6;
        border-color: #556ee6;
      }
      & label svg {
        opacity: 1;
        visibility: visible;
      }
    } 
  }

  label {
    position: relative;
    z-index: 2;
    p {
      padding-left: 30px;
      user-select: none;
    }
    &:before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.39);
      content: '';
      border-radius: 3px;
      z-index: -1;
      transition: all .3s ease;
    }

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 2.5px;
      color: white;
      opacity: 0;
      visibility: hidden;
      transition: all .3s ease;
    }
  }
}
</style>


