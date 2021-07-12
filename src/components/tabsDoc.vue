<template>
  <div>
    <h1>示例1</h1>
    <Tabs v-model:selected="selectTitle">
      <Tab title="title1">nihao</Tab>
      <Tab title="title2">haha</Tab>
    </Tabs>
  </div>
</template>

<script>
import { ref } from 'vue'
import Tabs from '../lib/tabs.vue'
import Tab from '../lib/tab.vue'

export default {
  name: "tabsDoc",
  components: {
    Tabs,
    Tab
  },
  setup() {
    const selectTitle = ref('title1')
    return {
      selectTitle
    }
  }
}
</script>

<style scoped>

</style>