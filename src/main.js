import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "plyr/dist/plyr.css";
import store from './store'
import Bootstrap from './plugins/bootstrap';

new Vue({
  router,
  store,
  Bootstrap,
  render: h => h(App),
}).$mount('#app')
