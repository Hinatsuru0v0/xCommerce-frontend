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
      { path: "", component: Home },
      { path: "login", name: "login", component: Login },
      { path: "register", name: "register", component: Register },
      { path: "category/:category", name: "category", component: Category },
      { path: "product/:id", name: "product", component: Product },
      { path: "cart", name: "cart", component: Cart },
      { path: "checkout", name: "checkout", component: Checkout }
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
