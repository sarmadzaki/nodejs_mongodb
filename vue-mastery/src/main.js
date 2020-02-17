import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';
import { Button } from 'ant-design-vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.component(Button.name, Button)


const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
