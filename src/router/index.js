import { createRouter, createWebHistory } from "vue-router";
import Details from "../views/Details.vue";
// import Next from "../views/Next.vue";
import Frame from "../views/Frame.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "frame",
      component: Frame,
    },
    {
      path: "/details",
      name: "details",
      component: Details,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

    //   component: () => import("../views/Next.vue"),
    },
  ],
});

export default router;
