import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from "./components/Markdown.vue";

import getStartedMD from "./markdown/getStarted.md";
import installMD from "./markdown/install.md";
import introMD from "./markdown/intro.md";

import { createWebHashHistory, createRouter } from "vue-router";
import { h } from "vue";

const create = (md:string) => {
  return h(Markdown, {md})
}
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc", component: Doc, children: [
        { path: "", component: create(introMD) },
        { path: "intro", component: create(introMD) },
        { path: "install", component: create(installMD) },
        { path: "getStarted", component: create(getStartedMD) },
        { path: "switch", component: SwitchDemo },
        { path: "tabs", component: TabsDemo },
        { path: "dialog", component: DialogDemo },
        { path: "button", component: ButtonDemo },
      ]
    },
  ]
});

export default router