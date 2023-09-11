import myButton from './my-button/index.vue';
import myDialog from './my-dialog/index.vue';
import myInput from './my-input/index.vue'
import './fonts/iconfont.css'

const components = {
  myButton,
  myDialog,
  myInput
};

function install(Vue) {
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
  // components.forEach(components => {
  //   Vue.component(component.name, component) 
  // });
}

export default {
  install,
  ...components,
};