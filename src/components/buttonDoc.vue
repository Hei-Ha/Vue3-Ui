<template>
  <div>
    <h1>实例1 theme</h1>
    <WButton>默认</WButton>
    <WButton :theme="'button'">button</WButton>
    <WButton :theme="'link'">链接</WButton>
    <WButton :theme="'text'">文本</WButton>
  </div>
  <div>
    <h1>实例2 size</h1>
    <WButton :size="'small'">小</WButton>
    <WButton :size="'normal'">正常</WButton>
    <WButton :size="'big'">大</WButton>
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