import Vue from "vue";
import Router from "vue-router";
import Main from "@/Main/Main";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/CreateArticle",
      component: () => import("./Account/createArticle.vue"),
    },
    {
      path: "/Login",
      component: () => import("./Account/logIn.vue"),
    },
    {
      path: "/profile",
      component: () => import("./Account/profile.vue"),
    },
    {
      path: "/Signup",
      component: () => import("./Account/signup.vue"),
    },
    {
      path: "/article1",
      component: () => import("./Articles/article1.vue"),
    },
    {
      path: "/article2",
      component: () => import("./Articles/article2.vue"),
    },
    {
      path: "/TMP",
      component: () => import("./TMP.vue"),
    },
  ],
});
