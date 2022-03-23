export default {
  label: '主题配置',
  prop: '',
  width: '150',
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
    }, {
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
    },
    {
      label: '画布大小',
      type: 'Canvas',
      prop: 'canvas'
    },
    {
      label: '背景颜色',
      type: 'ColorPicker',
      prop: 'backgroundColor'
    },
    // {
    //   label: '调色盘颜色',
    //   prop: 'color',
    //   type: 'ColorPicker'
    // },
    {
      label: '边距',
      type: 'paddingStyle',
      prop: 'paddingStyle'
    }
  ]
}