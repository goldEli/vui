<template>
  <h1>Tabs 示例</h1>
  <Tabs v-model:selectedKey="selectedKey">
    <Tab title="tab1" key="1"> Tab1 content </Tab>
    <Tab title="tab2" key="2"> Tab2 content </Tab>
    <Tab title="tab3" key="3"> Tab3 content </Tab>
  </Tabs>
</template> 
<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup(props, context) {
    const selectedKey = ref("1");
    return {
      selectedKey,
    };
  },
};
</script>