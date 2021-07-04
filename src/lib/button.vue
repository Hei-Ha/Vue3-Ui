<template>
  <!--  vue 会默认把外面穿进来的方法传到这里的最外面的标签上（这里是  div）-->
  <!--  可以使用 $attrs 获取事件再重新赋值给想要的元素 -->
  <div>
    <button
        v-bind="$attrs"
        :class="`theme-${theme}`">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  name: "button",
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  },
}
</script>

<style scoped>

</style>