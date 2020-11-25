<template>
  <router-view />
</template>

<script>
import { provide, reactive, ref } from "vue";
import router from "./router";
export default {
  name: "App",
  setup() {
    const windowWidth = window.document.documentElement.clientWidth;
    const menuVisible = ref(windowWidth > 500 ? true : false);
    provide("menuVisible", menuVisible);
    router.afterEach(() => {
      if (windowWidth <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>

<style></style>
