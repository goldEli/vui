<template>
  <router-view />
</template>

<script>
import {provide, reactive, ref} from "vue"
export default {
  name: "App",
  setup() {
    const windowWidth = window.document.documentElement.clientWidth
    const menuVisible = ref(windowWidth > 500 ? true : false)
    provide("menuVisible", menuVisible)
  }
};
</script>

<style></style>
