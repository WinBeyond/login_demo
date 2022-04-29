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
// req:  { name: 'xxx', password: 'xxx' }
// mock.onPost('/api/register').reply(200, {
//   code: 0,
//   message: 'success',
//   data: null,
// });
mock.onPost('/api/register').reply(200, {
  code: -1,
  message: 'xxxx',
  data: null,
});

// 后端设置cookie
// req:  { name: 'xxx', password: 'xxx' }
// mock.onPost('/api/login').reply(200, {
//   code: 0,
//   message: 'success',
//   data: null,
// });
mock.onPost('/api/login').reply(200, {
  code: -1,
  message: 'password wrong',
  data: null,
});

mock.onPost('/api/list_user').reply(200, {
  code: 0,
  message: 'success',
  data: [
    {
      name: 'xxxx2',
      xxxx: 'xxxxx',
      xxx: 'xxxx',
    },
    {
      name: 'xxxx1',
      xxxx: 'xxxxx',
      xxx: 'xxxx',
    },
  ],
});
