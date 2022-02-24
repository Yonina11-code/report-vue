export default {
  // 后台返回的数据
  /**
   * source数据格式如果是[[]],则不需要指定dimensions，
   * 若source数据格式是[{}], 则需要指定dimensions
   */
  source: [
    ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
    ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
    ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
  ]
  // dimensions: ['product', '2015', '2016', '2017'],
  // source: [
  //     {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
  //     {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
  //     {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
  //     {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
  // ]
}