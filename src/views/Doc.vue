<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-show="asideVisible">
        <ol>
          <li>
            <router-link to="/doc/intro">简介</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/getStart">开始使用</router-link>
          </li>
          <h2>组件列表</h2>
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
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script>
import { defineComponent, inject } from 'vue'
import Topnav from './doc/Topnav.vue'

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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    z-index: 2;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  background: lightblue;
  width: 150px;
  padding: 70px 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;


  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        margin: 5px 0;
      }
      .router-link-active {
        background: #ffffff;
      }
    }

    > h2 {
      margin-bottom: 4px;
      padding: 0 16px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
