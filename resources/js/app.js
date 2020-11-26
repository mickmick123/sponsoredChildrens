
require('./bootstrap');

import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
import VueLazyload from 'vue-lazyload';
import moment from 'moment';

window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1,
  observer: true,
  listenEvents: ['scroll']
});


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MMMM Do YYYY')
  }
});

Vue.component(
  'Tab', 
  require('./components/reusable/Tab.vue').default
);
Vue.component(
  'Tabs', 
  require('./components/reusable/Tabs.vue').default
);

const app = new Vue({
    el: '#app',
    store: store,
    router: new VueRouter(routes),
    
});
