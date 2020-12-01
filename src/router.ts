import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import Intro from "./views/Intro.vue";
import Install from "./views/Install.vue"
import GetStarted from "./views/GetStarted.vue";
import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";

import { createWebHashHistory, createRouter } from "vue-router";
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc", component: Doc, children: [
        { path: "", component: Intro },
        { path: "intro", component: Intro },
        { path: "install", component: Install },
        { path: "getStarted", component: GetStarted },
        { path: "switch", component: SwitchDemo },
        { path: "tabs", component: TabsDemo },
        { path: "dialog", component: DialogDemo },
        { path: "button", component: ButtonDemo },
      ]
    },
  ]
});

export default router