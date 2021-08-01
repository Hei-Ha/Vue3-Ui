<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gexing"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <span v-show="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside" />
  </div>
</template>
<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
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
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width:500px) {
    > .menu{display: none;}
    > .logo{margin: 0 auto;}
    > .toggleAside {display: inline-block;}
  }
}
</style>