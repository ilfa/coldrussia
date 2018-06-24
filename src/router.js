import Vue from 'vue';
import Router from 'vue-router';

import Weather from './components/Weather.vue';
import ColdestLink from './components/ColdestLink.vue';
import CounterButton from './components/CounterButton.vue';

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Weather,
    components: {
      default: Weather,
      coldestLink: ColdestLink,
      counterButton: CounterButton,
    },
    meta: { coldest: false },
  },
  {
    path: '/coldest',
    components: {
      default: Weather,
      counterButton: CounterButton,
      // coldestLink: Footer,
    },
    meta: { coldest: true },
  }
];

export function createRouter() {
  return new Router({
    mode: 'history',
    routes,
    scrollBehavior () {
      return { x: 0, y: 0 }
    }
  });
}