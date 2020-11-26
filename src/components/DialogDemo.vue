<template>
  <h3>Dialog 示例</h3>
  <Button @click="toggle">open</Button>
  <Dialog
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :ok="ok"
    :cancel="cancel"
  >
    <template v-slot:title>
      <h5>this is title</h5>
    </template>
    <template v-slot:content>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
    </template>
  </Dialog>
  <h3>直接打开 Dialog</h3>

  <Button @click="open">open directly</Button>
</template> 
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDailog } from "../lib/openDailog";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = true;
    };
    const ok = () => {};
    const cancle = () => {};
    const open = () => {
      openDailog({
        title: "open directly",
        content: "123"
      });
    };
    return {
      visible,
      toggle,
      ok,
      cancle,
      open,
    };
  },
};
</script>