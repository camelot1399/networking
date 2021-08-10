import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {layout: 'Main'},
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    meta: {layout: 'Auth'},
    component: () => import("@/views/Auth/Auth.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
