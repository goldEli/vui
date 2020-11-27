<template>
  <div>
    <span>{{title}}</span>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>