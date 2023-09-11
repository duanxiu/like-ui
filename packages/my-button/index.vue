<template>
  <button
    :class="[
      'my-button',
      `my-button-${type}`,
      mimicry ? 'is-mimicry' : '',
      plain ? 'is-plain' : '',
      round ? 'is-round' : '',
      circle ? 'is-circle' : '',
      disabled ? 'is-disabled' : ''
    ]"
    @click="handleClick"
  >
    <i :class="icon"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
import { defineComponent, PropType, ref, reactive } from 'vue'

export default defineComponent({
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: { type: Boolean, default: false },
    icon: { type: [Array, Boolean], default: false }
  },
  setup(props, ctx) {
    // console.log('type', props.plain)
    const methods = {
      handleClick(e) {
        ctx.emit('click', e)
      }
    }
    // return { ...methods }
  }
})
</script>

<style lang="scss">
.my-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  /* can't select text */
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  /* plain style */
  &.is-plain {
    &:hover,
    &:focus {
      background: #fff;
      border-color: #489eff;
      color: #409eff;
    }
  }

  /* round */
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  /* circle */
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  /* icon style */
  & [class*='my-icon-'] + span {
    margin-left: 5px;
  }

  /* disable style */
  &.is-disabled {
    cursor: no-drop;
  }
}

/* different type style */
.my-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }

  &.is-plain {
    color: #409eff;
    background: #ecf5ff;

    &:hover,
    &:focus {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
}

.my-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }

  &.is-plain {
    color: #67c23a;
    background: #c2e7b0;

    &:hover,
    &:focus {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
}

.my-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }

  &.is-plain {
    color: #909399;
    background: #d3d4d6;

    &:hover,
    &:focus {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
}

.my-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }

  &.is-plain {
    color: #e6a23c;
    background: #f5dab1;

    &:hover,
    &:focus {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
}

.my-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }

  &.is-plain {
    color: #f56c6c;
    background: #fbc4c4;

    &:hover,
    &:focus {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }

  .my-button.is-mimicry {
    box-shadow: inset 3px 6px 10px #ccc, inset -3px -7px 10px #fff;
  }

  .my-button--primary.is-mimicry {
    box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  }

  .my-button--info.is-mimicry {
    box-shadow: inset 3px 6px 10px #73767a, inset -3px -7px 10px #adb0b8;
  }

  .my-button--success.is-mimicry {
    box-shadow: inset 3px 6px 10px #6aa54e, inset -3px -7px 10px #a0f774;
  }

  .my-button--warning.is-mimicry {
    box-shadow: inset 3px 6px 10px #bc914f, inset -3px -7px 10px #ffd977;
  }

  .my-button--danger.is-mimicry {
    box-shadow: inset 3px 6px 10px #c45656, inset -3px -7px 10px #ff8282;
  }

  // 朴素按钮

  .my-button.is-plain {
    box-shadow: unset;

    &:hover,
    &:focus {
      background: #fff;
      border-color: #489eff;
      color: #409eff;
    }
  }

  .my-button--primary.is-plain {
    box-shadow: unset;
    color: #409eff;
    background: #ecf5ff;

    &:hover,
    &:focus {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }

  .my-button--success.is-plain {
    box-shadow: unset;
    color: #67c23a;
    background: #c2e7b0;

    &:hover,
    &:focus {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }

  .my-button--info.is-plain {
    box-shadow: unset;
    color: #909399;
    background: #d3d4d6;

    &:hover,
    &:focus {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }

  .my-button--warning.is-plain {
    box-shadow: unset;
    color: #e6a23c;
    background: #f5dab1;

    &:hover,
    &:focus {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }

  .my-button--danger.is-plain {
    box-shadow: unset;
    color: #f56c6c;
    background: #fbc4c4;

    &:hover,
    &:focus {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }

  // round
  .my-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  // 圆形按钮
  .my-button.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  // 让图标和文字之间空开
  .d-button [class*='fa-'] + span {
    margin-left: 5px;
  }

  // 禁用
  .d-button.d-button.is-disabled .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(148, 146, 146, 0.39);
    left: 0;
    top: 0;
    box-shadow: 2px 2px 3px rgba(216, 213, 213, 0.3);
    border-radius: 4px;
    z-index: 100;
  }

  .d-button.is-round .mask {
    border-radius: 20px;
  }

  .d-button.is-circle .mask {
    border-radius: 50%;
  }

  .d-button.is-disabled {
    cursor: no-drop;
  }
}

.my-button.is-mimicry {
  box-shadow: inset 3px 6px 10px #ccc, inset -3px -7px 10px #fff;
}

.my-button--primary.is-mimicry {
  box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
}

.my-button--info.is-mimicry {
  box-shadow: inset 3px 6px 10px #73767a, inset -3px -7px 10px #adb0b8;
}

.my-button--success.is-mimicry {
  box-shadow: inset 3px 6px 10px #6aa54e, inset -3px -7px 10px #a0f774;
}

.my-button--warning.is-mimicry {
  box-shadow: inset 3px 6px 10px #bc914f, inset -3px -7px 10px #ffd977;
}

.my-button--danger.is-mimicry {
  box-shadow: inset 3px 6px 10px #c45656, inset -3px -7px 10px #ff8282;
}

.my-button.is-plain {
  box-shadow: unset;

  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}

.my-button-primary.is-plain {
  box-shadow: unset;
  color: #409eff;
  background: #ecf5ff;

  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}

.my-button-success.is-plain {
  box-shadow: unset;
  color: #67c23a;
  background: #c2e7b0;

  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.my-button-info.is-plain {
  box-shadow: unset;
  color: #909399;
  background: #d3d4d6;

  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}

.my-button-warning.is-plain {
  box-shadow: unset;
  color: #e6a23c;
  background: #f5dab1;

  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}

.my-button-danger.is-plain {
  box-shadow: unset;
  color: #f56c6c;
  background: #fbc4c4;

  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
.my-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 圆形按钮
.my-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// 让图标和文字之间空开 .d-button
[class*='fa-'] + span {
  margin-left: 5px;
}

// 禁用
.my-button.d-button.is-disabled .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(148, 146, 146, 0.39);
  left: 0;
  top: 0;
  box-shadow: 2px 2px 3px rgba(216, 213, 213, 0.3);
  border-radius: 4px;
  z-index: 100;
}

.my-button.is-round .mask {
  border-radius: 20px;
}

.my-button.is-circle .mask {
  border-radius: 50%;
}

.my-button.is-disabled {
  cursor: no-drop;
}
</style>
