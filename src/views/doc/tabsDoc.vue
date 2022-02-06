<template>
  <div>
    <h1>Tabs 标签页</h1>
    <p class="describe">分隔内容上有关联但属于不同类别的数据集合。</p>
    <div class="exampleDiv">
      <el-card shadow="never" class="elCard">
        <Tabs v-model:selected="selectTitle">
          <Tab title="title1">内容1</Tab>
          <Tab title="title2">内容2</Tab>
        </Tabs>
      </el-card>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="param" label="参数" min-width="180" />
      <el-table-column prop="des" label="说明" min-width="180" />
      <el-table-column prop="type" label="类型" min-width="180" />
      <el-table-column prop="values" label="可选值" min-width="180" />
      <el-table-column prop="defaultValue" label="默认值" min-width="180" />
    </el-table>
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
    const tableData = [
      {
        param: 'selected',
        des: '当前选中项',
        type: 'string',
        values: '—',
        defaultValue: '—',
      }
    ]
    return {
      tableData,
      selectTitle
    }
  }
}
</script>

<style scoped>
.describe {
  margin-top: 20px;
  margin-bottom: 30px;
}
.exampleDiv {
  max-width: 70%;
}
.elCard {
  margin-bottom: 20px;
}
</style>