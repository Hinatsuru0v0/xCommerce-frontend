import Vue from "vue";
import VueRouter from "vue-router";

const NotFoundComponent = () => import("../views/Error/404");

const Index = () => import("../views/Index");
const Login = () => import("../views/UCenter/Login");
const Category = () => import("../views/Category/Category");
const Product = () => import("../views/Product/Product");
const Cart = () => import("../views/Cart/Cart");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      { path: "login", name: "login", component: Login },
      { path: "category/:category", name: "category", component: Category },
      { path: "product/:id", name: "product", component: Product },
      { path: "cart", name: "cart", component: Cart }
    ]
  },
  { path: "*", component: NotFoundComponent }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
