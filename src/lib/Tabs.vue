
<template>
  <div class="vui-tabs">
    <div class="vui-tabs-nav">
      <div
        class="vui-tabs-nav-item"
        v-for="{ title, key } in tabsInfo"
        @click="selected(key)"
        v-bind:key="key"
      >
        {{ title }}
      </div>
    </div>
    <div class="vui-tabs-content">
      <component
        v-bind:is="currentContent"
        v-bind:key="currentContent"
      ></component>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, reactive, Ref, ref } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selectedKey: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();

    for (let d of defaults) {
      if (d.type !== Tab) {
        throw new Error("Tabs's children has type which is not Tab");
      }
    }
    const tabsInfo = defaults.map((child) => {
      return child.props;
    });
    const currentContent = computed(() => {
      return defaults.find((item) => item.props.key === props.selectedKey);
    });
    const selected = (key: string) => {
      console.log(key);
      context.emit("update:selectedKey", key);
    };
    return {
      defaults,
      tabsInfo,
      currentContent,
      selected,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.vui-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>