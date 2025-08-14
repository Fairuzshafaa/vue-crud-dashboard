import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";

const routes = [
  { path: "/login", name: "login", component: Login, meta: { public: true } },
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];
  if (to.meta.requiresAuth && !isLoggedIn) return next("/login");
  if (to.name === "login" && isLoggedIn) return next("/");
  next();
});

export default router;
