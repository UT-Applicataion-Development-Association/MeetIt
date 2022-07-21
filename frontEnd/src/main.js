import Vue from "vue";
import App from "./App.vue";
import Router from "./router";
import 'vue-phone-number-input/dist/vue-phone-number-input.css';


Vue.config.productionTip = false;

new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount("#app");
