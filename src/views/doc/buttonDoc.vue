<template>
  <h1>Button按钮</h1>
  <p class="describe">常用的操作按钮</p>
  <div class="example">
    <h2>基础用法</h2>
    <el-card shadow="never" class="elCard">
      <span><WButton>Default</WButton></span>
      <span><WButton theme="link">link</WButton></span>
      <span><WButton :theme="'text'">文本</WButton></span>
    </el-card>
  </div>
  <div class="example">
    <h2>size</h2>
    <el-card shadow="never" class="elCard">
      <span><WButton :size="'small'">小</WButton></span>
      <span><WButton :size="'normal'">正常</WButton></span>
      <span><WButton :size="'big'">大</WButton></span>
    </el-card>
  </div>
  <div class="example">
    <h2>实例3 disabled</h2>
    <el-card shadow="never" class="elCard">
      <span><WButton :disabled="true">禁用</WButton></span>
      <span><WButton :disabled="true" theme="link">link</WButton></span>
      <span><WButton :disabled="true" :theme="'text'">文本</WButton></span>
    </el-card>
  </div>
  <div class="example">
    <h2>实例4 load</h2>
    <el-card shadow="never" class="elCard">
      <span><WButton :loading="true" :size="'small'">小</WButton></span>
      <span><WButton :loading="true">中</WButton></span>
      <span><WButton :loading="true" :size="'big'">大</WButton></span>
    </el-card>
  </div>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="param" label="参数" min-width="180" />
    <el-table-column prop="des" label="说明" min-width="180" />
    <el-table-column prop="type" label="类型" min-width="180" />
    <el-table-column prop="values" label="可选值" min-width="180" />
    <el-table-column prop="defaultValue" label="默认值" min-width="180" />
  </el-table>
</template>

<script lang="ts">
import WButton from '../lib/button.vue'
export default {
  name: "buttonDoc",
  components: {
    WButton
  },
  setup() {
    const tableData = [
      {
        param: 'theme',
        des: '按钮主题',
        type: 'string',
        values: 'default/link/text',
        defaultValue: 'default',
      },
      {
        param: 'size',
        des: '尺寸大小',
        type: 'string',
        values: 'small/normal/big',
        defaultValue: 'normal',
      },
      {
        param: 'disabled',
        des: '是否禁用',
        type: 'boolean',
        values: '—',
        defaultValue: 'false',
      },
      {
        param: 'loading',
        des: '是否处于加载中',
        type: 'boolean',
        values: '—',
        defaultValue: 'false',
      }
    ]
    return {
      tableData
    }
  }
}
</script>

<style scoped lang="scss">
.describe {
  margin-top: 20px;
  margin-bottom: 30px;
}
.example {
  margin-top: 20px;
  .elCard {
    span {
      display: inline-block;
      margin: 0 10px;
    }
  }
}
</style>