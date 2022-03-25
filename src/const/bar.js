export default {
  width: 800,
  height: 400,
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
  },
  series: [
    {
      type: 'bar',
      stack: 'total',
      /**
       * 瀑布柱状图的关键
       */
      // itemStyle: {
      //   borderColor: 'transparent',
      //   color: 'transparent'
      // },
      // emphasis: {
      //   itemStyle: {
      //     borderColor: 'transparent',
      //     color: 'transparent'
      //   }
      // }
    },
    {
      type: 'bar',
      stack: 'total'
    },
    {
      type: 'bar',
      stack: 'total'
    },
    {
      type: 'bar',
      stack: 'total'
    },
    {
      type: 'bar',
      stack: 'total'
    },
    {
      type: 'bar',
      stack: 'total'
    }
  ]
}
