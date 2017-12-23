axios数据请求方式
================

方法一：直接使用 封装后的 axios
-----------------------------

先按需导入 `axiosUtils` 中的工具方法，如下所示（导入 `axiosByGet`、`axiosByPost` 等方法）：

```js
    import { axiosByGet, axiosByPost, axiosByPut, axiosByDelete } from './axiosUtils';
```

接着调用相应的请求方式：

```js
    // 只有 url 是必须的
    axiosByGet(url, paramData, axiosConfig);
```

完整应用如下：

```js
    import { axiosByGet } from './axiosUtils';

    var initTableList = async function () {
        // await 关键字 需要在 async 函数中才能使用
        var tableDataList = await axiosByGet('/demo/getTableData.shtml', {
            page: 1
        });

        console.log('获取到的列表数据为：', tableDataList);
        // 渲染数据： tableDataList.forEach(...)
    };

    initTableList();
```


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


方法二（推荐）：使用 封装后的数据获取方法
-------------------------------------

为了统一管理所有的数据请求接口，一般情况不建议直接使用 `axiosByGet`、`axiosByPost` 。  
应该先在 **API模块** 中定义数据的获取方法，如下所示：

```js
    // （假设）这里是 api.js 文件。主要作用是封装 接口请求地址

    // 公共接口地址
    const API_URL = {
        LOGIN: '/login.shtml'
    };

    // 对外提供的数据获取接口
    export default {
        // 用户登录
        Login(param, config) {
            return axiosByPost(API_URL.LOGIN, param, config);
        }
    }
```

然后在外部使用时，需要配合 `async await` 语法（否则就需要 繁琐的 `Promise` 语法包装）

```js
    // 这里是 实际的业务文件

    import API from './api';

    // 可以改为 函数定义，供其它地方调用
    (async function () {
        // （可选）传入axios配置
        var axiosConfig = {
            // 覆盖错误回调（默认情况下会进行通用处理，弹窗提示错误信息）
            errorCallback: function (message) {
                console.log('外部重置的错误回调，得到参数: ', message);
            }
        };

        try {
            // 需要发送的数据
            var postData = {
                username: 'xixi',
                passworld: 'haha'
            };
            // 发送请求（得到的数据，是 code 为 'SUCCESS' 情况下的 objects 对象的数据）
            var ajaxResponseData = await API.LOGIN(postData, axiosConfig);

            // 返回数据在这里就可以直接使用，因为前面有 await 关键字，会等待异步数据获取到，才执行下面的代码
            console.log('接口返回结果: ', ajaxResponseData);
        }
        catch (e) {
            // 异常在这里处理，比如 网络错误（断网）、http状态码不为200、code 不为 'SUCCESS' 等
            console.log('接口 有异常:', e);
        }
    })();
```
