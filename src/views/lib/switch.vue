<template>
    <label class="switchLabel">
        <button class="W-switch" :class="{'W-checked': switchStatus, 'disabledBtn': disabled}" @click="toggle"
                :disabled="disabled">
            <span />
        </button>
        <p class="describe">{{ describeText }}</p>
    </label>
</template>

<script lang="ts">
export default {
    name: 'switch',
    props: {
        switchStatus: {
            type: Boolean
        },
        disabled: {
            type: Boolean,
            default: false
        },
        describeText: {
            type: String,
            default: ''
        }
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:switchStatus', !props.switchStatus)
        }
        return {
            toggle
        }
    }
}
</script>

<style lang="scss">
@use 'sass:math';

$h: 22px;
$h2: $h - 4px;

.switchLabel {
    display: flex;
    align-items: center;

    .W-switch {
        position: relative;
        height: $h;
        width: $h * 2;
        border: none;
        background: #bfbfbf;
        border-radius: math.div($h, 2);
        margin-right: 5px;

        span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: math.div($h2, 2);
            transition: all 250ms;
        }

        &.W-checked {
            background: #1890ff;
        }

        &.W-checked > span {
            left: calc(100% - #{$h2} - 2px);
        }

        &:active {
            > span {
                width: $h2 + 4px;
            }
        }

        &.W-checked:active {
            > span {
                width: $h2 + 4px;
                margin-left: -4px;
            }
        }
    }

    .describe {
        font-size: 14px;
    }
}


.disabledBtn {
    cursor: not-allowed;
}
</style>