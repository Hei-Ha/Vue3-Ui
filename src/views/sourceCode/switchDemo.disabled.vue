<demo>
禁用状态
</demo>
<template>
    <WSwitch class="disabled" v-model:switchStatus="switchValue" disabled />
</template>

<script>
import WSwitch from '../lib/switch.vue'
import { ref } from 'vue'

export default {
    components: {
        WSwitch
    },
    setup() {
        const switchValue = ref(false)
        const disabled = ref(true)
        return {
            switchValue,
            disabled
        }
    }
}
</script>

<style scoped>


</style>