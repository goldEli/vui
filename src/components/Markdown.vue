
<template>
  <div class="markdown-body" v-html="md"></div>
</template>
<script lang="ts">
export default {
  props: {
    md: {
      type: String,
    }
  }
};
</script>