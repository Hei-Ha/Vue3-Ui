<template>
  <h1>Switch 开关</h1>
  <p class="describe">开关选择器。</p>
  <div class="demo1">
    <section>
      <Switch v-model:switchStatus="switchStatus" />
    </section>
    <div class="lineText">
      <span class="line1" />
      <h4>基础用法</h4>
      <span class="line2" />
    </div>
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

.demo1 {
  max-width: 700px;
  height: auto;
  border: 1px solid #EBEDEF;
  padding-top: 30px;

  section {
    margin-left: 20px;
  }

  .lineText {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    margin-bottom: 20px;

    span {
      height: 2px;
      background: #EBEDEF;
    }

    .line1 {
      width: 20px;
    }
    .line2 {
      flex: 1;
    }

    h4 {
      width: auto;
      margin: 0 20px 0 5px;
    }
  }
}
</style>