
import canvas from './canvas.vue'
import colorPicker from './colorPicker.vue'
import displayStyle from './displayStyle.vue'
import paddingStyle from './paddingStyle.vue'
import radio from './radio.vue'
import collapse from './collapse.vue'
import input from './input.vue'

const components = [
  // columnar,
  canvas,
  colorPicker,
  displayStyle,
  paddingStyle,
  radio,
  collapse,
  input
]
function install (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  canvas,
  colorPicker,
  displayStyle,
  paddingStyle,
  radio,
  collapse,
  install
}