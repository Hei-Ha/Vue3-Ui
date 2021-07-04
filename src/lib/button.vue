<template>
  <!--  vue 会默认把外面穿进来的方法传到这里的最外面的标签上（这里是  div）-->
  <!--  可以使用 $attrs 获取事件再重新赋值给想要的元素 -->
  <div>
    <button v-bind="$attrs" class="W-button" :class="`WTheme-${theme}`">
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

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.W-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
}
</style>