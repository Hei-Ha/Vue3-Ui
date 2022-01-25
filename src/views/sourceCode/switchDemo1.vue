<template>
  <WSwitch v-model="switchValue" disabled />
</template>

<script lang="ts">
import { ref } from 'vue'
// import WSwitch from '@/views/lib/switch.vue'
import WSwitch from '../lib/switch.vue'

export default {
  name: 'switchDemo1',
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