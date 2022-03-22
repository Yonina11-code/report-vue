export default {
  label: '主题配置',
  prop: '',
  column: [
    {
      label: '是否开启暗黑模式',
      prop: 'darkMode',
      type: 'radio',
      dicData: [
        {
          label: '是',
          value: true
        },
        {
          label: '否',
          value: false
        }
      ]
    },
    {
      label: '调色盘颜色',
      prop: 'color',
      type: 'ColorPicker'
    },
    {
      label: '背景色',
      prop: 'backgroundColor',
      type: 'ColorPicker'
    },
    {
      label: '是否开启动画',
      prop: 'animation',
      type: 'radio',
      dicData: [
        {
          label: '是',
          value: true
        },
        {
          label: '否',
          value: false
        }
      ]
    }
  ]
}