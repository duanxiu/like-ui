<template>
  <div class="my-input">
    <input
      class="my-input__inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :value="value"
      @input="handelInput"
    />
  </div>
</template>

<script>
import { defineComponent, PropType, defineEmits } from 'vue'
export default defineComponent({
  name: 'MyInput',
  props: {
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    value: { type: String, default: '' },
    clearable: { type: Boolean, default: false },
    showPassword: { type: Boolean, default: false }
  },
  emits: ['update:value'],

  setup(props, ctx) {
    // const emits = defineEmits(['update:visiable'])

    const methods = {
      closeDialog() {
        console.log(11)
        ctx.emit('update:visiable', false)
      },
      handelInput(e) {
        ctx.emit('update:value', e.target.value)
      }
    }
    return { ...methods }
  }
})
</script>

<style lang="scss">
.my-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .my-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .d-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    } // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.my-input.suffix {
  .d-input_inner {
    padding-right: 30px;
  }
  .my-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 900;
    fai {
      color: #c0c4cc;
      font-size: 14px;
    }
    & .active {
      color: #666;
    }
  }
}
</style>
