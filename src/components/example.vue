<template>
    <div class="demo num1">
        <component :is="component" />
        <div class="lineText">
            <span class="line1" />
            <h4>{{ title }}</h4>
            <span class="line2" />
        </div>
        <svg class="icon" @click="showSourceCode()">
            <use v-show="demoCodeVisible" xlink:href="#icon-open" />
            <use v-show="!demoCodeVisible" xlink:href="#icon-close" />
        </svg>
        <div v-show="demoCodeVisible" class="sourceCode">
            <pre class="language-css" v-html="highLightCode(component.__sourceCode)" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue"
import 'prismjs'
import 'prismjs/themes/prism.min.css'

export default {
    name: 'Example',
    props: {
        component: {
            type: Object
        },
        title: {
            type: String,
            default: '标题'
        }
    },
    setup() {
        const demoCodeVisible = ref(false)
        const showSourceCode = () => {
            demoCodeVisible.value = !demoCodeVisible.value
        }

        const highLightCode = (str) => {
            return window.Prism.highlight(str, window.Prism.languages.javascript, 'javascript');
        }
        onMounted(() => {
            console.log('Component has been mounted',);
        });

        return {
            demoCodeVisible,
            showSourceCode,
            highLightCode
        }
    },
}
</script>

<style scoped lang="scss">

.demo {
    max-width: 700px;
    height: auto;
    border: 1px solid #EBEDEF;
    padding: 30px 20px;
    margin-bottom: 15px;

    .icon {
        display: block;
        margin: 0 auto;
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