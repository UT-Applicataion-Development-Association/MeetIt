// import VueRouter from "vue-router";
import Vue from "vue";
import Router from "vue-router";
import StartPage from "./components/StartPage.vue";
import EventDetail from "./components/EventDetail.vue";
import HelloWorld from "./components/HelloWorld.vue";
import PageNotFound from "./components/PageNotFound.vue";
import loginPage from "./components/LoginPage.vue";





Vue.use(Router);

const routes = [
  { path: "/", component: StartPage }, //TODO: implement start page
  { path: "/user/login", component: loginPage },
  { path: "/hello", component: HelloWorld },
  { path: "/event/:eventId", component: EventDetail },
  { path: "/404", component: PageNotFound },
  { path: "*", redirect: "/404" },
];

export default new Router({
  mode: "history",
  routes: routes,
});
