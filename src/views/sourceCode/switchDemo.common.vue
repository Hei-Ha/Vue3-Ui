<demo>
基础用法
</demo>
<template>
    <WSwitch v-model:switchStatus="switchValue"></WSwitch>
</template>

<script setup>
import { ref } from 'vue'
import WSwitch from '../lib/switch.vue'
const switchValue = ref(true)
</script>

<style scoped>

</style>