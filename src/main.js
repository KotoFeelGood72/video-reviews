import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "plyr/dist/plyr.css";
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import axios from 'axios';

axios.defaults.baseURL = 'https://w3studio.pro/api/v1/'

import initWidget from './modules/video.js'

// Получите элемент DOM на сайте, к которому вы хотите подключить виджет
const widgetElement = document.getElementById('video')

// Проверьте, что элемент существует, прежде чем инициализировать виджет
if (widgetElement) {
  initWidget(widgetElement)
}

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
