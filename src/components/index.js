import formConfig from "./reports/index";

const components = [
  ...formConfig
]

const install = function (Vue, opts = {}) {
  if (!Vue || install.installed) return
  install.installed = true
  components.map(component => {
    Vue.component(component.name, component)
  })
  // Object.keys(prototypes).forEach((key) => {
  //   Vue.prototype[key] = prototypes[key]
  // })
  document.documentElement.style.setProperty('--color-primary', opts.theme || '#e50213')
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  version: require('../../package.json').version
}