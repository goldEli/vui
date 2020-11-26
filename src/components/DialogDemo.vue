<template>
  <div>Dialog 示例</div>
  <Button @click="toggle">open</Button>
  <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="ok" :cancel="cancel"></Dialog>
</template> 
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
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
    const ok = () => {
      return true
    }
    const cancle = () => {

    }

    return {
      visible,
      toggle,
      ok,
      cancle
    };
  },
};
</script>