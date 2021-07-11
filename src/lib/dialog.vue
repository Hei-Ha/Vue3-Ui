<template>
  <div class="W-dialog-overlay"></div>
  <div class="W-dialog-wrapper">
    <div class=" W-dialog ">
      <header> 标题 <span class="W-dialog-close"></span></header>
      <main>
        <p>一</p>
        <p>二</p>
      </main>
      <footer>
        <WButton class="W-footer-Btn" level="main">确定</WButton>
        <WButton class="W-footer-Btn">取消</WButton>
      </footer>
    </div>
  </div>
</template>

<script>
import WButton from './button.vue'
export default {
  name: 'dialog',
  components: {
    WButton
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      Type: String
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