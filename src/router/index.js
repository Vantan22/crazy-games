import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/originals",
    name: "originals",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OriginalsView.vue"),
  },
  {
    path: "/c",
    name: "chanel",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ChanelView.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
