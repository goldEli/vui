<template>
  <div class="markdown-body" v-html="htmlStr"></div>
</template>
<script lang="ts">
import htmlStr from "../markdown/install.md";
export default {
  setup() {
    return {
      htmlStr,
    };
  },
};
</script>