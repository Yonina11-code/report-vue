import columnar from "./columnar"

const components = [
  columnar
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
  columnar,
  install
}