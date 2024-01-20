import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Vuesax from "vuesax";
import "@/assets/style/css/reset.css";
import "vuesax/dist/vuesax.css";
import "@/assets/style/scss/_config_vuesax.scss";
import { hoverDirective } from "@/containts/_config-hover-directive";
import "boxicons/css/boxicons.min.css";
Vue.config.productionTip = false;
Vue.directive("hover", hoverDirective);
Vue.use(Vuesax, {
  colors: {
    primary: "#6842ff",
    success: "rgb(23, 201, 100)",
    danger: "rgb(242, 19, 93)",
    warning: "rgb(255, 130, 0)",
    dark: "rgb(36, 33, 69)",
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
