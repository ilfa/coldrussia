import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Weather from './components/Weather.vue'
import Footer from './components/Footer.vue'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Weather,
    components: {
      default: Weather,
      footer: Footer,
    },
    meta: { coldest: false },
  },
  {
    path: '/coldest',
    components: {
      default: Weather,
      footer: Footer,
    },
    meta: { coldest: true },
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
