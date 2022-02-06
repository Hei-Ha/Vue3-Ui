<template>
  <h1>Switch 开关</h1>
  <p class="describe">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
  <Example title="常规用法" :component="SwitchDemoCommon" />
  <Example title="禁止状态" :component="SwitchDemoDisabled" />
  <Example title="增加描述" :component="SwitchDemoDescribe" />
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="param" label="参数" min-width="180" />
    <el-table-column prop="des" label="说明" min-width="180" />
    <el-table-column prop="type" label="类型" min-width="180" />
    <el-table-column prop="values" label="可选值" min-width="180" />
    <el-table-column prop="defaultValue" label="默认值" min-width="180" />
  </el-table>
</template>

<script>
import SwitchDemoCommon from '../sourceCode/switchDemo.common.vue'
import SwitchDemoDisabled from '../sourceCode/switchDemo.disabled.vue'
import SwitchDemoDescribe from "../sourceCode/switchDemo.describe.vue"
import Example from '../../components/example.vue'

export default {
  name: "switchDoc",
  components: {
    Example
  },
  setup() {
    const tableData = [
      {
        param: 'model-value/v-model',
        des: '绑定值',
        type: 'boolean/string',
        values: '—',
        defaultValue: '—',
      },
      {
        param: 'disabled',
        des: '是否禁用',
        type: 'boolean',
        values: '—',
        defaultValue: 'false',
      },
      {
        param: 'describeText',
        des: '描述',
        type: '文本',
        values: '—',
        defaultValue: '—',
      }
    ]
    return {
      tableData,
      SwitchDemoCommon,
      SwitchDemoDisabled,
      SwitchDemoDescribe
    }
  },
}
</script>

<style scoped lang="scss">
.describe {
  margin-top: 20px;
  margin-bottom: 30px;
}
h3 {
  margin-bottom: 10px;
}

ul {
  list-style-type: square;
}
</style>