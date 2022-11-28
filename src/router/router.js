import Converter from "@/pages/Converter";
import Currencies from "@/pages/Currencies";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Converter,
  },
  {
    path: "/currencies",
    component: Currencies,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
