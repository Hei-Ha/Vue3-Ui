<template>
  <div>
    <WButton>默认</WButton>
    <WButton :theme="'button'">button</WButton>
    <WButton :theme="'link'">链接</WButton>
    <WButton :theme="'text'">文本</WButton>
  </div>
</template>

<script lang="ts">
import WButton from '../lib/button.vue'
export default {
  name: "buttonDoc",
  components: {
    WButton
  },
  setup() {
    return {
    }
  }
}
</script>

<style scoped>

</style>