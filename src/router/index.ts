import type { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import { createGuard } from "./guard";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home, meta: { requiresAuth: true, title: "Home" } },
  {
    path: "/about",
    component: About,
    meta: { requiresAuth: true, title: "About" },
  },
  {
    path: "/login",
    component: () => import('../pages/Login.vue'),
    meta: { requiresAuth: false, title: "Login" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
  createGuard(router);
}

export default router;
