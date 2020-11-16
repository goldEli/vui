import { createApp } from "vue";
import App from "./App.vue";
import Test from "./Test.vue";
import Test2 from "./Test2.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Test },
    { path: "/xxx", component: Test2 },
  ]
});

const app = createApp(App);
app.use(router);
app.mount("#app");
