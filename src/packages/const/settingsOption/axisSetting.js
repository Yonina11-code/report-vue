export default [
  {
    tabName: 'X轴',
    prop: 'xAxis',
    axisOptions: [{
      label: '是否显示x轴',
      prop: 'show',
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
      label: 'x 轴的位置',
      prop: 'position',
      type: 'radio',
      dicData: [
        {
          label: 'top',
          value: 'top'
        },
        {
          label: 'bottom',
          value: 'bottom'
        },
        {
          label: 'left',
          value: 'left'
        },
        {
          label: 'right',
          value: 'right'
        }
      ]
    },
    {
      label: '坐标轴类型',
      prop: ' type',
      type: 'radio',
      dicData: [
        {
          label: '数值轴',
          value: 'value'
        },
        {
          label: '类目轴',
          value: 'category'
        },
        {
          label: '时间轴',
          value: 'time'
        },
        {
          label: '对数轴',
          value: 'log'
        }
      ]
    },
    {
      label: '坐标轴名称与轴线之间的距离',
      value: 'nameGap',
      type: 'input'
    },
    {
      label: '坐标轴名字旋转角度',
      value: 'nameRotate',
      type: 'input'
    }
    ]
  },
  {
    tabName: 'Y轴',
    prop: 'yAxis',
    axisOptions: [
      {
        label: '是否显示y轴',
        prop: 'show',
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
        label: 'y轴的位置',
        prop: 'position',
        type: 'radio',
        dicData: [
          {
            label: 'top',
            value: 'top'
          },
          {
            label: 'bottom',
            value: 'bottom'
          },
          {
            label: 'left',
            value: 'left'
          },
          {
            label: 'right',
            value: 'right'
          }
        ]
      },
      {
        label: '坐标轴类型',
        prop: ' type',
        type: 'radio',
        dicData: [
          {
            label: '数值轴',
            value: 'value'
          },
          {
            label: '类目轴',
            value: 'category'
          },
          {
            label: '时间轴',
            value: 'time'
          },
          {
            label: '对数轴',
            value: 'log'
          }
        ]
      },
      {
        label: '坐标轴名称与轴线之间的距离',
        value: 'nameGap',
        type: 'input'
      },
      {
        label: '坐标轴名字旋转角度',
        value: 'nameRotate',
        type: 'input'
      }
    ]
  }
]