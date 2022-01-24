<template>
  <div class="W-tabs">
    <div class="W-tabs-nav" ref="container">
      <div
        class="W-tabs-nav-item"
        :class="{selected: t === selected}"
        v-for="(t, index) in titles"
        :key="t + index"
        :ref="el => {if (t === selected) {
          selectedItem = el
         }}"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div
        class="W-tabs-nav-indicator"
        ref="indicator"
      /> <!--    导航下面的横线-->
    </div>
    <div class="W-tabs-content">
      <component :is="current" :key="current.props.title" />
<!--      <component class="W-tabs-content-item" v-for="(c, index) in defaults" :key="index + c" :is="c" :class="{selected: c.props.title === selected}" />-->
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUpdated, watchEffect, computed } from 'vue'
import Tab from './tab.vue'

export default {
  name: 'tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement | null>(null)
    const indicator = ref<HTMLDivElement | null>(null)
    const container = ref<HTMLDivElement | null>(null)

    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('子标签必须是 tab')
      }
    })
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected)
    })

    onMounted(() => {
      watchEffect( () => {
        const { width } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const { left:containerLeft } = container.value.getBoundingClientRect()
        const { left } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.left = (left - containerLeft) + 'px'
      })
    })

    const titles = defaults.map((item) => {
      return item.props.title
    })
    // title 点击事件函数
    const select = (t: string) => {
      context.emit('update:selected', t)
    }
    return {
      selectedItem,
      defaults,
      titles,
      current,
      select,
      indicator,
      container
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    //&-item {
    //  display: none;
    //
    //  &.selected {
    //    display: block;
    //  }
    //}
   }
}
</style>