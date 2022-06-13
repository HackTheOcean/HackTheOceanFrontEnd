import { createWebHistory, createRouter } from "vue-router";
const routes = [
{
path: "/",
alias: "/introduccion",
name: "introduccion",
component: () => import("./components/Introduccion")
},
{
path: "/pollution",
name: "pollution",
component: () => import("./components/PollutingImpact")
}
];
const router = createRouter({
history: createWebHistory(),
routes,
});
export default router;