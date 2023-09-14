import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => {
      return import("../views/Login.vue");
    },
  },
  {
    path: "/registro",
    name: "Registro",
    component: () => {
      return import("../views/Registro.vue");
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => {
      return import("../views/Home.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
