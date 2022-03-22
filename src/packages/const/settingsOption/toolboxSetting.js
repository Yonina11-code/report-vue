export default {
  label: '工具栏',
  prop: 'toolbox',
  column: [
    {
      label: '是否显示工具栏组件',
      type: 'radio',
      prop: 'show',
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
      label: 'icon 的布局朝向',
      type: 'radio',
      prop: 'orient',
      dicData: [
        {
          label: '水平',
          value: 'horizontal'
        },
        {
          label: '垂直',
          value: 'vertical'
        }
      ]
    },
    {
      label: 'icon 的大小',
      type: 'input',
      prop: 'itemSize'
    },
    {
      label: 'icon 每项之间的间隔',
      prop: 'confine',
      type: 'input'
    },
    {
      label: '是否在鼠标 hover 的时候显示每个icon的标题',
      prop: 'showTitle',
      type: 'radio',
      labelWith: 300,
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
