import axios from 'axios'
import ERROR_CODE_MAP from './errorCode'


// 改变 axios 内置配置
axios.defaults.timeout = 50e3; // 50秒自动超时

// 自定义的 axios配置（为拦截器添加参数）
axios.defaults.CODE_ERROR_MEAASGE = '系统繁忙，请稍后重试';
axios.defaults.RESPONSE_ERROR_MEAASGE = '网络中断，请稍后重试';
axios.defaults.errorCallback = alert;


// 拦截请求数据：为 GET请求 设置不缓存
axios.interceptors.request.use(function (config) {
    // GET请求不缓存
    if ((config.cache !== false) && (config.method === 'get')) {
        config.params = Object.assign({
            _: Number(new Date())
        }, config.params);
    }

    return config;

}, function (error) {
    return Promise.reject(error);
});


// 拦截响应数据：响应错误时做通用处理；响应正确时 将最终需要的数据 作为
axios.interceptors.response.use(function (response) {
    // response 中有 config data headers request(XHR) status(number) statusText(string) 这些属性
    if (response.status !== 200) {
        console.warn('HTTP 状态码非200！');
        // TODO: 弹窗提示、处理 返回值
        return response;
    }

    // 后端响应数据
    var data = response.data;

    // 响应数据没有正常返回时，做默认处理
    if (data.code !== 'SUCCESS') {
        // 将 错误code 转为 对应的文本
        var errorMessage = ERROR_CODE_MAP[data.code] || data.msg || response.config.CODE_ERROR_MEAASGE;

        // 使用axios通用配置中的提示方法（注意：该方法会丢失this引用，所以不要在此回调方法中使用this）
        response.config.errorCallback.call(null, errorMessage);

        // response 能被外部获取到吗？
        return Promise.reject(data, response);
    }
    // TODO: 提供方法让外部（在resolve或reject时）获取 完整的 response 对象

    return response.data.objects;

}, function (error) {
    var statusCode = error.response.status;
    if (statusCode !== 200) {
        console.warn('HTTP 状态码非200！ status:', statusCode);
        // TODO: 404、500 等状态码的处理
        // return Promise.reject(error);
    }

    var config = error.config;
    var errorCallback = config.errorCallback;
    // 通用错误提示
    if (errorCallback === alert) {
        // alert不能作为对象的属性调用，否则会报错
        errorCallback(config.RESPONSE_ERROR_MEAASGE);
    }
    else {
        config.errorCallback(config.RESPONSE_ERROR_MEAASGE);
    }

    return Promise.reject(error);
});




// TODO: 启用 loading 遮罩
/*
axios.interceptors.request.use(function (config) {
    return config;
});
axios.interceptors.response.use(function (response) {
    return response;
});
*/


// 单独 export GET类型的方法
export function axiosByGet(url, param, config) {
    return axios.get(url, Object.assign({
        params: param
    }, config));
}

// 批量 export POST PUT DELETE 类型的快捷方法
export var [axiosByPost, axiosByPut, axiosByDelete] = ['post', 'put', 'delete'].map(methodType => {
    return function (url, param, config) {
        return axios[methodType](url, param, config);
    };
});