import Vue from 'vue';
import GamePage from './GamePage.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(GamePage),
}).$mount('#app');
