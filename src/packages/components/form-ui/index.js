
import canvas from './canvas.vue'
import colorPicker from './colorPicker.vue'
import displayStyle from './displayStyle.vue'
import paddingStyle from './paddingStyle.vue'
import radio from './radio.vue'
const components = [
  // columnar,
  canvas,
  colorPicker,
  displayStyle,
  paddingStyle,
  radio
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
  install
}