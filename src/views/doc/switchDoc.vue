<template>
  <Switch v-model:switchStatus="switchStatus" />
  <div>
    组件示例
  </div>

</template>

<script lang="ts">
import { ref } from "vue"
import Switch from "../lib/switch.vue"

export default {
  name: "switchDoc",
  setup() {
    const switchStatus = ref(false)
    return {
      switchStatus
    }
  },
  components: {
    Switch
  }
}
</script>

<style scoped>

</style>