import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";
import Rooms from "../views/Rooms.vue";
import Game from "../views/Game.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
  },
  {
    path: "/rooms/:id",
    name: "Game",
    component: Game,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
