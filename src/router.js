/**
 * 该路由仅限用于一级路由
 */
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
let pmRouter = new Router({
  routes: [
    {
      path: "/",
      name: "",
      component: () =>
        import(/* webpackChunkName: "" */ "@/views/HelloWorld")
    },
    {
      path: "/qdInput",
      name: "qdInput",
      component: () =>
        import(/* webpackChunkName: "buildGroup" */ "@/views/qdInputDemo")
    },
  ]
});
export default pmRouter;
