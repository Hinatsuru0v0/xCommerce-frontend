import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("../views/Index");
const Login = () => import("../views/UCenter/Login");
const Category = () => import("../views/Category/Category");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      { path: "login", name: "login", component: Login },
      { path: "category/:category", name: "category", component: Category }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
