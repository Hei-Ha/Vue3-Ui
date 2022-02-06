<demo>
文字描述
</demo>
<template>
  <WSwitch v-model:switchStatus="switchValue" describeText="按月计费" />
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