<template>
  <h1>Switch 开关</h1>
  <p class="describe">开关选择器。</p>
  <Example title="常规用法" :component="SwitchDemoCommon" />
  <Example title="禁止状态" :component="SwitchDemoDisabled" />
</template>

<script>
import SwitchDemoCommon from '../../views/sourceCode/switchDemo.common.vue'
import SwitchDemoDisabled from '../../views/sourceCode/switchDemo.disabled.vue'
import Example from '../../components/example.vue'

export default {
  name: "switchDoc",
  components: {
    Example
  },
  setup() {
    return {
      SwitchDemoCommon,
      SwitchDemoDisabled
    }
  },
}
</script>

<style scoped lang="scss">
.describe {
  margin-top: 20px;
  margin-bottom: 30px;
}
h3 {
  margin-bottom: 10px;
}

ul {
  list-style-type: square;
}
</style>