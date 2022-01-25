<template>
  <WSwitch v-model:switchStatus="switchValue" />
</template>

<script lang="ts">
import WSwitch from '@/views/lib/switch.vue'
import { ref } from 'vue'

export default {
  components: {
    WSwitch
  },
  setup() {
    const switchValue = ref(true)
    const disabled = ref(false)
    return {
      switchValue,
      disabled
    }
  }
}
</script>

<style scoped>

</style>