import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

console.log('hello');

function bar() { }

const baz = 'aflskdjsd' + 2;



baz * baz;;;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
