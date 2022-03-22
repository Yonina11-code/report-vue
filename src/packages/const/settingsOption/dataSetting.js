export default [
  {
    type: ['bar', 'line', 'scatter'],
    heads: [{
     label: '字段',
     prop: 'attr'
    }, {
      label: 'x轴',
      prop: 'x'
    },{
      label: 'y轴',
      prop: 'y'
    }, {
      label: '堆叠项',
      prop: 'stack'
    }
    ]
  },
  {
    type: ['pie'],
    heads: [
      {
        label: '字段',
        prop: 'attr'
      },
      {
        label: '类目',
        prop: 'category'
      },
      {
        label: '比较项',
        prop: 'compare'
      }
    ]
  },{
    type: ['map'],
    disabled: 'address',
    heads: [
      {
        label: '字段',
        prop: 'attr'
      },
      {
        label: '散点',
        prop: 'scatter'
      },
      // {
      //   label: '比较项',
      //   prop: 'compare'
      // }
    ]
  }
]