<template>
  <div>
    <div class="banner">
      <Topnav />
      <h1>vue 组件</h1>
      <p class="actions">
        <a href="">GIthub</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import Topnav from '../components/Topnav.vue'

export default defineComponent({
  components: {
    Topnav
  },
  setup() {
    
  },
})
</script>
<style scoped lang="scss">

</style>
