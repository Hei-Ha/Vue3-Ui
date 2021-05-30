<template>
  <Topnav />
  <div class="content">
    <aside>边栏</aside>
    <main>主内容</main>
  </div>
</template>
<script>
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
