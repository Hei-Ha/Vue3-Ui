<template>
  <div class="W-tabs">
    <div class="W-tabs-nav">
      <div class="W-tabs-nav-item" :class="{selected: t === selected}" v-for="(t, index) in titles" :key="t + index" @click="select(t)">{{ t }}</div>
    </div>
    <div class="W-tabs-content">
<!--      <component class="W-tabs-content-item" :is="current" />-->
      <component class="W-tabs-content-item" v-for="(c, index) in defaults" :key="index + c" :is="c" :class="{selected: c.props.title === selected}" />
    </div>
  </div>
</template>

<script lang="ts">
// import { computed } from 'vue'
import Tab from './tab.vue'

export default {
  name: 'tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('子标签必须是 tab')
      }
    })
    const titles = defaults.map((item) => {
      return item.props.title
    })
    // 渲染内容
    // const current = computed(() => {
    //   return defaults.filter((tag) => {
    //     return tag.props.title === props.selected
    //   })[0]
    // })
    // title 点击事件函数
    const select = (t: string) => {
      context.emit('update:selected', t)
    }
    return {
      defaults,
      titles,
      // current,
      select
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.W-tabs {
  &-nav {
     display: flex;
     color: $color;
     border-bottom: 1px solid $border-color;
    &-item {
       padding: 8px 0;
       margin: 0 16px;
       cursor: pointer;
      &:first-child {
         margin-left: 0;
       }
      &.selected {
         color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
   }
}
</style>