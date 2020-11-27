
<template>
  <div>
    <component
      @click="currentTab.data = c.children?.default?.()"
      v-for="c in defaults"
      v-bind:key="c.key"
      v-bind:is="c"
    ></component>
    <div>
      <component
        v-for="(c, idx) in currentTab.data"
        v-bind:key="idx"
        v-bind:is="c"
      ></component>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, Ref, ref } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    defaultActiveKey: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    // console.log(context.slots.default());
    const defaults = context.slots.default();
    const currentTab = reactive({ data: "" });

    const changeActiveKey = (event) => {
      console.log(event.target);
    };

    for (let d of defaults) {
      if (d.type !== Tab) {
        throw new Error("Tabs's children has type which is not Tab");
      }
      if (d.key === props.defaultActiveKey) {
        currentTab.data = d.children?.default?.();
      }
    }
    return {
      defaults,
      currentTab,
      changeActiveKey,
    };
  },
};
</script>