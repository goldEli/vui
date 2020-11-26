<template>
  <h1>theme</h1>
  <Button theme="normal">normal</Button>
  <Button theme="link">link</Button>
  <Button theme="text">text</Button>
  <h1>size</h1>
  <Button size="small">small</Button>
  <Button size="normal">normal</Button>
  <Button size="large">large</Button>
  <h1>level</h1>
  <Button level="normal">normal</Button>
  <Button level="danger">danger</Button>
  <Button level="main">main</Button>
  <h1>disabled</h1>
  <Button disabled>disabled</Button>
  <Button theme="link" disabled>disabled link</Button>
  <Button theme="text" disabled>disabled text</Button>
</template> 
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>