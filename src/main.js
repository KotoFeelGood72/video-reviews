import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/main.css'

import GlobalIcon from './components/shared/global-icon.vue';

import axios from 'axios';

axios.defaults.baseURL = 'https://w3studio.pro/api/v1/'

Vue.component('GlobalIcon', GlobalIcon)



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
