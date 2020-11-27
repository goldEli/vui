
<template>
  <div class="vui-tabs">
    <div class="vui-tabs-nav">
      <div
        class="vui-tabs-nav-item"
        v-for="(item, idx) in titles"
        v-bind:key="idx"
      >
        {{ item }}
      </div>
    </div>
    <div class="vui-tabs-content">
      <component v-for="c in defaults" v-bind:is="c" v-bind:key="c"></component>
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
    const defaults = context.slots.default();

    for (let d of defaults) {
      if (d.type !== Tab) {
        throw new Error("Tabs's children has type which is not Tab");
      }
    }
    const titles = defaults.map((child) => {
      return child.props.title;
    });
    return {
      defaults,
      titles,
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