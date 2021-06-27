<template>
  <button :class="{checked: checked}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'switch.vue',
  setup() {
    const checked = ref(false)
    const toggle = () => {
      checked.value = !checked.value
    }
    return {
      checked,
      toggle
   }
  }
}
</script>

<style scoped lang="scss">
@use 'sass:math';

$h: 22px;
$h2: $h - 4px;
button {
  position: relative;
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: math.div($h, 2);
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: math.div($h2, 2);
}

button.checked {
  background: blue;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
</style>