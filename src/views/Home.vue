<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>vue3 练习</h1>
      <p class="actions">
        <a href="https://github.com/Hei-Ha/Vue3-Ui">Github</a>
        <router-link to="/doc/install">开始</router-link>
      </p>
    </div>
    <div class="navigation">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue" />
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-typescript-def" />
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-lightbulbenergysaving" />
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import Topnav from './doc/Topnav.vue'

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
$textColor: #030000;
$btn: #250AE9;

.topnavAndBanner {
  min-height: 500px;
  background: rgb(165,183,245);
  background: linear-gradient(137deg, rgba(165,183,245,1) 0%, rgba(255,255,255,1) 100%);
  clip-path: ellipse(90% 60% at 50% 40%);
  z-index: 0;

  .banner {
    color: $textColor;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .actions{
      padding: 8px 0;
      a {
        margin:0 8px;
        color: #fff;
        background: $btn;
        display: inline-block;
        padding: 8px 24px;
        border-radius: 4px;
        &:hover {}
        text-decoration: none;
      }
    }
  }

  .navigation {
    color: $textColor;
    z-index: 1;
    margin: 64px auto;
    //width: 400px;
    @media (min-width: 800px) {
      width: 800px;
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }

    > ul {
      display: flex;
      flex-wrap: wrap;

      > li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
        "icon title"
        "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;

        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }

        > h3 {
          grid-area: title;
          font-size: 28px;
        }

        > p {
          grid-area: text
        }
      }
    }
  }


}
</style>
