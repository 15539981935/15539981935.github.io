var APIs = {
  'POST /api/user/login': {
    success: '@boolean',
    msg: '登录成功.',
    statusCode: 200,
    data: null
  },
  'GET /api/getUser': {
    id: 1,
    name: '@name',
    email: '@email',
    address: '@region',
    datetime: '@datetime'
  },
  'POST /api/tableData': {
    'list|10': [{
      'id|+1': 1,
      name: '@name',
      email: '@email',
      datetime: '@datetime',
      address: '@region',
    }]
  },
  'POST /api/submitForm': {
    success: '@boolean',
    msg: "提交成功.",
    count: 1000,
    data: {}
  },
  'get /api/user/all': {
    code: 0,
    msg: "xxxx",
    count: 1000,
    'data|20': [{
      'id|+1': 1,
      username: '@name',
      sex: '@boolean',
      city: '@city',
      sign: '@csentence',
      experience: '@integer',
      score: '@integer',
      classify: '@word',
      wealth: '@integer',
      auth: '@boolean'
    }]
  }};