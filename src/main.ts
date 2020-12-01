import { createApp } from "vue";
import "./lib/vui.scss"
import "./index.scss";
import "./lib/icon"
import 'github-markdown-css'
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
