var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance

var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
// 通过session获取用户
mock.onGet('/api/get_user').reply(200, {
  code: 0,
  message: 'success',
  data: {
    name: 'mason',
  },
});

// 注册
mock.onPost('/api/register', { naeme: 'xxx', password: 'xxx' }).reply(200, {
  code: 0,
  message: 'success',
  data: null,
});

// 后端设置cookie
mock.onPost('/api/login', { naeme: 'xxx', password: 'xxx' }).reply(200, {
  code: 0,
  message: 'success',
  data: null,
});

mock.onPost('/api/list_dbuser', {}).reply(200, {
  code: 0,
  message: 'success',
  data: [
    {
      name: 'xxxx2',
      xxxx: 'xxxxx',
      xxxx: 'xxxx',
      dbname: 'xxxx',
    },
    {
      name: 'xxxx1',
      xxxx: 'xxxxx',
      xxxx: 'xxxx',
      dbname: 'xxxx',
    },
  ],
});
