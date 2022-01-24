<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="W-dialog-overlay" @click="onClickOverlay"></div>
      <div class="W-dialog-wrapper">
        <div class=" W-dialog ">
          <header>
            <slot name="header"/>
            <span @click="close" class="W-dialog-close" />
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <WButton class="W-footer-Btn" level="main" @click="submitBtn">确定</WButton>
            <WButton class="W-footer-Btn" @click="cancelBtn">取消</WButton>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script>
import WButton from './button.vue'
export default {
  name: 'WDialog',
  components: {
    WButton
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnOverlay: { // 是否点击遮罩层，关闭弹窗
      type: Boolean,
      default: true
    },
    submit: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup(props, context) {
    // 关闭弹窗
    const close = () => {
      context.emit('update:visible', !props.visible)
    }
    // 点击遮罩层是否关闭弹窗
    const onClickOverlay = () => {
      if (props.closeOnOverlay) {
        close()
      }
    }
    // 确认按钮
    const submitBtn = () => {
      if (props.submit && props.submit() !== false) {
        close()
      }
    }
    // 取消按钮
    const cancelBtn = () => {
      if (props.cancel && props.cancel() !== false) {
        close()
      }
    }
    return {
      close,
      onClickOverlay,
      cancelBtn,
      submitBtn
    }
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.W-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    display: flex;
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    justify-content: flex-end;

    .W-footer-Btn {
      margin-left: 10px;
      font-size: 14px;
    }
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>