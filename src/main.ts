import { createApp } from "vue";
import App from "./App.vue";
import Test from "./Test.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [{ path: "/", component: Test }]
});

const app = createApp(App);
app.use(router);
app.mount("#app");
