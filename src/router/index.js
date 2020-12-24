import Vue from "vue";
import VueRouter from "vue-router";

const NotFoundComponent = () => import("../views/Error/404");

const Index = () => import("../views/Index");
const Home = () => import("../views/Home/Home");
const Login = () => import("../views/UCenter/Login");
const Register = () => import("../views/UCenter/Register");
const Category = () => import("../views/Category/Category");
const Product = () => import("../views/Product/Product");
const Cart = () => import("../views/Cart/Cart");
const Checkout = () => import("../views/Checkout/Checkout");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
    children: [
      { path: "", component: Home, meta: { title: "首页" } },
      {
        path: "login",
        name: "login",
        component: Login,
        meta: { title: "登陆" }
      },
      {
        path: "register",
        name: "register",
        component: Register,
        meta: { title: "注册" }
      },
      {
        path: "category/:category",
        name: "category",
        component: Category,
        meta: { title: "商品分类" }
      },
      {
        path: "product/:id",
        name: "product",
        component: Product,
        meta: { title: "商品详情" }
      },
      {
        path: "cart",
        name: "cart",
        component: Cart,
        meta: { title: "购物袋" }
      },
      {
        path: "checkout",
        name: "checkout",
        component: Checkout,
        meta: { title: "结账" }
      }
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
