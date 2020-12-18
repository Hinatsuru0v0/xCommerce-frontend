import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("../views/Index");
const Login = () => import("../views/UCenter/Login");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [{ path: "login", name: "login", component: Login }]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
