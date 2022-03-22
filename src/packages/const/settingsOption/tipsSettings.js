export default {
  label: '提示框组件',
  prop: 'tooltip',
  column: [
    {
      label: '是否显示提示框组件',
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
      label: '触发类型',
      type: 'radio',
      prop: 'trigger',
      dicData: [
        {
          label: '数据项图形触发',
          value: 'item'
        },
        {
          label: '坐标轴触发',
          value: 'axis'
        },
        {
          label: '什么都不触发',
          value: 'none'
        }
      ]
    },
    {
      label: '提示框触发的条件',
      type: 'radio',
      prop: 'triggerOn',
      dicData: [
        {
          label: '鼠标移动时',
          value: 'mousemove'
        },
        {
          label: '鼠标点击时',
          value: 'click'
        },
        {
          label: '同时鼠标移动和点击时触发',
          value: 'mousemove|click'
        }
      ]
    },
    {
      label: '是否将 tooltip 框限制在图表的区域内',
      prop: 'confine',
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
      label: '浮层的背景颜色',
      prop: 'backgroundColor',
      type: 'ColorPicker'
    }
  ]
}