<template>
  <div class="topnav">
      <div class="logo" @click="toggleAside">LOGO</div>
      <ul class="menu">
        <li>菜单一</li>
        <li>菜单二</li>
      </ul>
    </div>
</template>
<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const asideVisible = inject('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      asideVisible,
      toggleAside
    }
  },
})
</script>

<style scoped lang='scss'>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 1;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>