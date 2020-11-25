<template>
  <router-view />
</template>

<script>
import {provide, reactive, ref} from "vue"
export default {
  name: "App",
  setup() {
    const menuVisible = ref(true)
    provide("menuVisible", menuVisible)
  }
};
</script>

<style></style>
