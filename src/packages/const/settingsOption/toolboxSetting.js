export default {
  label: '工具栏',
  prop: 'toolbox',
  width: 300,
  column: [
    {
      label: '是否显示保存图片工具栏组件',
      type: 'radio',
      prop: 'feature.saveAsImage',
      dicData: [
        {
          label: '是',
          value: {}
        },
        {
          label: '否',
          value: false
        }
      ]
    },
    {
      label: '是否显示配置项还原工具栏组件',
      type: 'radio',
      prop: 'feature.restore',
      dicData: [
        {
          label: '是',
          value: {}
        },
        {
          label: '否',
          value: false
        }
      ]
    },
    {
      label: '是否显示数据视图工具栏组件',
      type: 'radio',
      prop: 'feature.dataView',
      dicData: [
        {
          label: '是',
          value: {}
        },
        {
          label: '否',
          value: false
        },
      ]
    },
    {
      label: '是否显示数据区域缩放工具栏组件',
      type: 'radio',
      prop: 'feature.dataZoom',
      dicData: [
        {
          label: '是',
          value: {}
        },
        {
          label: '否',
          value: false
        }
      ]
    },
    {
      label: '是否显示动态类型切换组件',
      type: 'radio',
      prop: 'feature.magicType',
      dicData: [
        {
          label: '是',
          value: {
            type: ['line', 'bar', 'stack']
          }
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
