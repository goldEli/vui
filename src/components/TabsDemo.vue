<template>
  <h1>Tabs 示例</h1>
  <Tabs>
    <Tab title="tab1"> Tab1 content </Tab>
    <Tab title="tab2"> Tab2 content </Tab>
    <Tab title="tab3"> Tab3 content </Tab>
  </Tabs>
</template> 
<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  components: {
    Tabs,
    Tab,
  },
};
</script>