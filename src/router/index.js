import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/sdgs", name: "SDGs", component: () => import("@/views/SDGs.vue") },
  {
    path: "/article/:id",
    name: "article-detail",
    component: () => import("@/views/ArticleDetail.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

export default router;
