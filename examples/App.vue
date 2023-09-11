<template>
  <div>
    <div class="row">
      <MyButton type="primary">按钮</MyButton>
      <MyButton type="success">按钮</MyButton>
      <MyButton type="info">按钮</MyButton>
      <MyButton type="warning">按钮</MyButton>
      <MyButton type="danger">按钮</MyButton>
    </div>
    <div class="row">
      <h3>朴素按钮</h3>
      <MyButton type="primary" plain>按钮</MyButton>
      <MyButton type="success" plain>按钮</MyButton>
      <MyButton type="info" plain>按钮</MyButton>
      <MyButton type="warning" plain>按钮</MyButton>
      <MyButton type="danger" plain>按钮</MyButton>
    </div>
    <div class="row">
      <h3>圆角按钮</h3>
      <MyButton type="primary" round>按钮</MyButton>
      <MyButton type="success" round>按钮</MyButton>
      <MyButton type="info" round>按钮</MyButton>
      <MyButton type="warning" round>按钮</MyButton>
      <MyButton type="danger" round>按钮</MyButton>
    </div>
    <div class="row">
      <h3>圆形按钮</h3>
      <MyButton type="primary" circle>钮</MyButton>
      <MyButton type="success" circle>钮</MyButton>
      <MyButton type="info" circle>钮</MyButton>
      <MyButton type="warning" circle>钮</MyButton>
      <MyButton type="danger" circle>钮</MyButton>
    </div>
    <div class="row">
      <h3>禁用按钮</h3>
      <MyButton type="primary" disabled>钮</MyButton>
      <MyButton type="success" disabled>钮</MyButton>
      <MyButton type="info" disabled>钮</MyButton>
      <MyButton type="warning" disabled>钮</MyButton>
      <MyButton type="danger" disabled>钮</MyButton>
    </div>
    <div class="row">
      <h3>icon按钮</h3>
      <MyButton type="primary" icon="my-icon-add">钮</MyButton>
      <MyButton type="success" icon="my-icon-add">钮</MyButton>
      <MyButton type="info" icon="my-icon-add">钮</MyButton>
      <MyButton type="warning" icon="my-icon-add">钮</MyButton>
      <MyButton type="danger" @click="fn" icon="my-icon-add">钮</MyButton>
    </div>
    <div class="row">
      <h3>dialog弹框</h3>
      <MyButton type="primary" @click="lookDialog">查看</MyButton>
      <MyDialog
        title="查看"
        width="60%"
        top="200px"
        :visiable="visiable"
        @update:visiable="visiable = $event"
      >
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <template v-slot:footer>
          <MyButton type="primary" plain @click="visiable = false"
            >确定</MyButton
          >
          <MyButton type="success" @click="visiable = false" plain
            >取消</MyButton
          >
        </template>
      </MyDialog>
    </div>
    <div class="row">
      <h3>input</h3>
      <MyInput placeholder="请输入" type="password" name="username"></MyInput>
    </div>
    <div class="row">
      <h3>禁用input</h3>
      <MyInput
        placeholder="请输入"
        type="password"
        name="username"
        disabled
      ></MyInput>
    </div>
    <div class="row">
      <h3>input双向绑定v-model</h3>
      <MyInput placeholder="请输入" v-model="username"></MyInput>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
export default {
  setup() {
    let visiable = ref(false)
    let username = ref('zs')
    // return {
    //   visiable
    // }
    const methods = {
      lookDialog() {
        visiable.value = true
      },
      fn() {
        console.log(1113)
      }
      // close(val) {
      //   console.log('val', val)
      //   visiable.value = val
      // }
    }

    return { ...methods, visiable, username }
  }
}
// const type = ''
// return {
//   type
// }
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;

  .my-button {
    margin-right: 20px;
  }
}
</style>
