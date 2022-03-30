export default {
  legend: {
    type: 'scroll',
    left: 'left',
    orient: 'vertical' // 竖排
  },
  width: 600,
  height: 400,
  title: {
    textAlign: 'left',
    x:'center',
    y:'top',
  },
  grid: {  // 用于调整画图区域的左上角与右下角，使页面上的元素都能展示出来
    top: '10%',
    containLabel: true,
    height: '90%'
  },
  tooltip: {
    trigger: 'item'
  },
  toolbox: {
    show: true
  }
}