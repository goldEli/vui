<template>
  <div :size="size">
    <button class="vui-button" :class="{[`theme-${theme}`]: theme}" v-bind="rest">
      <slot />
    </button>
  </div>
</template> 
<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
  setup(props, context) {
    const { size, ...rest } = context.attrs;
    return { size, rest };
  },
};
</script>