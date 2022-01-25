<demo>
  基础用法
</demo>
<template>
  <WSwitch v-model:switchStatus="switchValue" />
</template>

<script>
import WSwitch from '../lib/switch.vue'
import { ref } from 'vue'

export default {
  components: {
    WSwitch
  },
  setup() {
    const switchValue = ref(true)
    return {
      switchValue
    }
  }
}
</script>

<style scoped>

</style>