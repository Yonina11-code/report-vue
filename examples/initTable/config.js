export default  [
  {
    label: '流水号',
    prop: 'deviceTradeNo',
    span: 12,
    // display: false,
    // hide: true,
    row: true,
    overHidden: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }]
  },
  {
    label: '平台订单号',
    prop: 'outTradeNo',
    span: 12,
    row: true,
    overHidden: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }]
  },
  {
    label: '渠道订单号',
    prop: 'tradeNo',
    span: 12,
    row: true,
    overHidden: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }]
  },
  {
    label: '客户信息',
    prop: 'customerId',
    span: 12,
    row: true,
    overHidden: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }]
  },
  {
    label: '订单创建时间',
    prop: 'ctime',
    span: 12,
    row: true,
    overHidden: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }]
  },
  {
    label: '用户类型',
    prop: 'customerType',
    span: 12,
    row: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }]
  },
  {
    label: '订单支付状态',
    prop: 'payStatus',
    span: 12,
    row: true,
    type: 'select',
    searchLabelWidth: 100,
    dicData: [{
      label: '交易关闭',
      value: -2
    },{
      label: '待支付',
      value: -1
    },{
      label: '已支付',
      value: 1
    },{
      label: '无效订单',
      value: -3
    }],
    rules: [{
      required: true,
      trigger: 'blur'
    }],
    search: true
  },
  {
    label: '支付完成',
    prop: 'payTime',
    span: 12,
    type: 'daterange',
    row: true,
    overHidden: true,
    search: true,
    searchslot: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }]
  },
  {
    label: '设备编号',
    prop: 'deviceNum',
    span: 12,
    row: true,
    overHidden: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }],
    search: true
  },
  {
    label: '结算员账号',
    prop: 'empAccount',
    span: 12,
    row: true,
    searchLabelWidth: 100,
    rules: [{
      required: true,
      trigger: 'blur'
    }],
    search: true
  },
  {
    label: '支付渠道',
    prop: 'paymentChannel',
    type: 'select',
    span: 12,
    row: true,
    overHidden: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }],
    search: true
  },
  {
    label: '消费金额',
    prop: 'payAmount',
    span: 12,
    row: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }]
  },
  {
    label: '优惠金额',
    prop: 'channelDiscount',
    span: 12,
    row: true,
    rules: [{
      required: true,
      trigger: 'blur'
    }]
  }
]