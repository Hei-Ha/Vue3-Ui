<template>
  <div>
    <h1>示例1</h1>
    <Tabs>
      <Tab title="标题1">nihao</Tab>
      <Tab title="标题2">haha</Tab>
    </Tabs>
  </div>
</template>

<script>
import Tabs from '../lib/tabs.vue'
import Tab from '../lib/tab.vue'

export default {
  name: "tabsDoc",
  components: {
    Tabs,
    Tab
  }
}
</script>

<style scoped>

</style>