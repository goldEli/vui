<template>
  <button class="vui-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="vui-loadingIndicator"></span>
    <slot />
  </button>
</template> 
<script lang="ts">
import { computed } from "vue";
export default {
  // inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "normal",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`vui-theme-${theme}`]: theme,
        [`vui-size-${size}`]: size,
        [`vui-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #cb997e;
$red: red;
$grey: grey;
$radius: 4px;
.vui-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.vui-theme-normal {
  }
  &.vui-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.vui-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.vui-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.vui-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.vui-level-main {
    background: $blue;
    color: white;
    border-color: $blue;
    &:hover,
    &:focus {
      background: darken($blue, 10%);
      border-color: darken($blue, 10%);
    }
  }
  &.vui-level-danger {
    background: $red;
    border-color: $red;
    color: white;
    &:hover,
    &:focus {
      background: darken($red, 10%);
      border-color: darken($red, 10%);
    }
  }
  &.vui-theme-normal {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.vui-theme-link,
  &.vui-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .vui-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: vui-spin 1s infinite linear;
  }
}
@keyframes vui-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
