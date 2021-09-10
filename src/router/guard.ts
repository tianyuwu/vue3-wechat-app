import type { Router } from "vue-router";
import { authStore } from "@/store/modules/auth";
export function createGuard(router: Router) {
  router.beforeEach(async (to) => {
    (document as any).title = to.meta.title ?? "微信公众号开发";
    if (to.meta.requiresAuth && !authStore.isLogin) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      return {
        path: "/login",
        // save the location we were at to come back later
        query: { redirect: to.fullPath, ...to.query },
      };
    }
  });
}
