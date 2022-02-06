<template>
  <div>
    <h1>Dialog 对话框</h1>
    <p class="describe">在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <div>
      <h2>基础用法</h2>
      <el-card shadow="never" class="elCard">
        <WButton @click="show">弹出dialog</WButton>
        <WDialog
            v-model:visible="visibleDialog"
            :submit="submit"
            :cancel="cancel">
          <template v-slot:header>
            这里是标题
          </template>
          <template v-slot:content>
            这里是自定义 content
          </template>
        </WDialog>
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

<script lang="ts">
import { ref } from 'vue'
import WButton from '../lib/button.vue'
import WDialog from '../lib/dialog.vue'
export default {
  name: "dialogDoc",
  components: {
    WDialog,
    WButton
  },
  setup() {
    const visibleDialog = ref(false)
    const show = () => {
      visibleDialog.value = !visibleDialog.value
    }
    // 确认按钮
    const submit = () => {
      console.log('submit')
      return false
    }
    // 取消按钮
    const cancel = () => {
      console.log('cancel')
      return true
    }

    // table 数据
    const tableData = [
      {
        param: 'model-value / v-model',
        des: '是否显示dialog',
        type: 'boolean',
        values: '—',
        defaultValue: '—',
      },
      {
        param: 'closeOnOverlay',
        des: '点击遮罩层是否关闭 dialog',
        type: 'boolean',
        values: '—',
        defaultValue: '—',
      },
      {
        param: 'footerVisible',
        des: '是否显示 footer',
        type: 'boolean',
        values: '—',
        defaultValue: '—',
      },
      {
        param: 'submit',
        des: '点击确认按钮的回调函数',
        type: 'Function',
        values: '—',
        defaultValue: '—',
      },
      {
        param: 'cancel',
        des: '点击取消按钮的回调函数',
        type: 'Function',
        values: '—',
        defaultValue: '—',
      }
    ]
    return {
      visibleDialog,
      show,
      submit,
      cancel,
      tableData
    }
  }
}
</script>

<style scoped>
.describe {
  margin-top: 20px;
  margin-bottom: 30px;
}
.elCard {
  margin: 20px 0;
}
</style>