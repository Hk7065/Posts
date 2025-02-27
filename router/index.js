import { createRouter, createWebHistory } from "vue-router";
import PostList from "@/pages/posts/index.vue";
import PostDetails from "@/pages/posts/[id].vue";

const routes = [
  { path: "/posts", component: PostList },
  { path: "/posts/:id", component: PostDetails, name: "post-details" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
