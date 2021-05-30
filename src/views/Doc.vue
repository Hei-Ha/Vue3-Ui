<template>
  <Topnav />
  <div class="content" v-show="asideVisible">
    <aside>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>主内容</main>
  </div>
</template>
<script>
import { defineComponent, inject } from 'vue'
import Topnav from '../components/Topnav.vue'

export default defineComponent({
  components: {
    Topnav
  },
  setup() {
    const asideVisible = inject('asideVisible')
    return {
      asideVisible
    }
  },
})
</script>
<style scoped lang='scss'>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>
