<template>
  <Switch v-model:switchStatus="switchStatus" />
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