import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import FavoriteView from "../views/FavoriteView.vue"
import CreateView from "../views/CreateView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: FavoriteView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
