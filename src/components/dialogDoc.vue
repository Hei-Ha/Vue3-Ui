<template>
  <div>
    <h1>示例： 1</h1>
    <WButton @click="show">dialog</WButton>
    <WDialog
      v-model:visible="visibleDialog"
      :submit="submit"
      :cancel="cancel"></WDialog>
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
    return {
      visibleDialog,
      show,
      submit,
      cancel
    }
  }
}
</script>

<style scoped>

</style>