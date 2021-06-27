<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>自定义 vue3 组件</h1>
      <p class="actions">
        <a href="">Github</a>
        <router-link to="/doc">开始</router-link>
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
@use 'sass:math';

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: math.div($h, 2);
      padding: 0 8px;
    }
  }
}
</style>
