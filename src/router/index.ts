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
    path: "/Rooms",
    name: "Rooms",
    component: Rooms,
  },
  {
    path: "/Rooms/:id",
    name: "Game",
    component: Game,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
