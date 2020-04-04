import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import routes, { Signup } from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({ mode: "history", routes });

new Vue({
  components: {
    "sign-up": Signup
  },
  router,
  render: h => h(App)
}).$mount("#app");