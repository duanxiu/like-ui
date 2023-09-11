<template>
  <div class="my-dialog_wrapper" v-show="visiable">
    <div class="my-dialog__wrapper">
      <div class="my-dialog" :style="{ width, 'margin-top': top }">
        <div class="my-dialog__header">
          <slot name="title">
            <span class="my-dialog_title">{{ title }}</span>
          </slot>
          <button class="my-dialog__headerbtn" @click="closeDialog">
            <i class="my-icon-close"></i>
          </button>
        </div>
        <div class="my-dialog__body">
          <slot></slot>
        </div>
        <div class="my-dialog__footer" v-if="$slots.footer">
          <!-- <MyButton>取消</MyButton>
          <MyButton type="primary">确定</MyButton> -->
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, PropType, defineEmits } from 'vue'
export default defineComponent({
  name: 'MyDialog',
  props: {
    title: { type: String, default: '提示' },
    width: { type: String, default: '30%' },
    top: { type: String, default: '15vh' },
    visiable: { type: Boolean, default: false },
    mimicry: { type: Boolean, default: false }
  },
  emits: ['update:visiable'],

  setup(props, ctx) {
    // const emits = defineEmits(['update:visiable'])

    const methods = {
      closeDialog() {
        console.log(11)
        ctx.emit('update:visiable', false)
      }
    }
    return { ...methods }
  }
})
</script>

<style lang="scss">
.my-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .my-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;

      .my-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }

      .my-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;

        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;

      .my-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
