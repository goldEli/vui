import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";
export const openDailog = (options: {
  title: any, content: any
}) => {
  const div = document.createElement("div")
  document.body.append(div)
  const app = createApp({
    render: () => {
      return h(Dialog, {
        "onUpdate:visible": (visible) => {
          if (visible === false) {
            app.unmount(div)
            div.remove()
          }
        }, visible: true
      }, { title: options.title, content: options.content })
    }
  })
  app.mount(div)
}