export default  {
  label: '图例',
  prop: 'legend',
  column: [
    {
      label: '类型',
      type: 'radio',
      prop: 'type',
      dicData: [
        {
          label: '普通图例',
          value: 'plain'
        },
        {
          label: '可滚动翻页的图例',
          value: 'scroll'
        }
      ]
    },
    {
      label: '是否显示图例',
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
      label: '图例组件离容器左侧的距离',
      prop: 'left',
      type: 'input'
    },
    {
      label: '图例组件离容器上侧的距离',
      prop: 'top',
      type: 'input'
    },
    {
      label: '图例组件离容器右侧的距离',
      prop: 'right',
      type: 'input'
    },
    {
      label: '图例组件离容器下侧的距离',
      prop: 'bottom',
      type: 'input'
    },
    {
      label: '宽度',
      prop: 'width',
      type: 'input'
    },
    {
      label: '高度',
      prop: 'width',
      type: 'input'
    }
  ]
}
