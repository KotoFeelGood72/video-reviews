import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "plyr/dist/plyr.css";
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import axios from 'axios';

axios.defaults.baseURL = 'https://roblitetmoub.beget.app/api/v1/'

// Установите плагины BootstrapVue и IconsPlugin
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
