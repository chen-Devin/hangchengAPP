// 获取 格式化后的当前时间
const now = () => new Date().toLocaleString();

// 创建proxy处理规则，参数可以设置 代理主机（默认使用 本地JSON模拟服务器）
const createProxyOptions = function (targetProxyHost, useStaticMockServer) {
    // 过滤大数据量的post请求
    var postDataFilter = function (postData, maxLength = 2000) {
        return postData.replace(/[\r|\n|\s]+/g, ' ').slice(0, maxLength);
    };

    // 基础代理配置
    var proxyOptions = {
        target: targetProxyHost,

        // 利用 webpack-devServer 的proxy规则（主要是操作onProxyReq和onProxyRes），将POST请求（及其它 非GET请求） 用重定向 改为GET请求（并附带参数）
        onProxyReq: function (proxyReq, req, res, options) {
            // 如果使用的是 本地的静态模拟服务器，则不需要接收 请求实体
            if (!useStaticMockServer) {
                return;
            }

            // 获取POST参数
            if (proxyReq.method != "GET") {
                let postParamData = "";
    
                // 接收POST数据块
                req.addListener("data", function (postDataChunk) {
                    postParamData += postDataChunk;
                });
                // POST数据接收完毕
                req.addListener("end", function () {
                    // 将POST的参数写入到req中，在重定向时才能给GET请求带上
                    req.xlstPostData = postParamData;
    
                    if (postParamData) {
                        console.log("\n\n%s 来自 [%s] 请求，地址为 [%s] 的数据: [%s] 接收完毕", now(), proxyReq.method, proxyReq.path, postDataFilter(postParamData));
                    }
                });
            }
        },
        onProxyRes: function (proxyRes, req, res) {
            const reqStatusCode = proxyRes.statusCode;
            const reqMethod = req.method;
            const reqPath = req.path;
    
            console.log("\n%s 接收到 [%s] 请求，地址为 [%s] ，查询字符串参数为 [%s] 。代理结果的 响应状态码 为 [%s]", now(), reqMethod, reqPath, (req._parsedUrl.query || "空"), reqStatusCode);
            
            // 如果使用的是 本地的静态模拟服务器，则不需要 启用重定向功能
            if (!useStaticMockServer) {
                return;
            }

            // 如果 reqStatusCode 为 404 则说明 IIS（或提供静态资源的服务器） 的模拟数据不存在，给予提示
            if (reqStatusCode === 404) {
                console.warn("\t\t\t【提示】 可能缺乏模拟数据文件，请检查 静态资源服务器 站点文件");
            }
            
            // 因为IIS（或提供静态资源的服务器）无法处理 非GET请求，所以这里把 非GET请求 重定向为 GET请求
            if (((reqStatusCode === 405) || (reqStatusCode === 404)) && (reqMethod != "GET")) {
                // 从req中获取 原请求的 （POST或PUT）请求实体数据
                let postParamData = req.xlstPostData;
                // 【重要】需要 encodeURI 转义，否则会因不合法的 Header 报错：'The header content contains invalid characters'
                let querySearch = postParamData ? ("?" + encodeURI(postDataFilter(postParamData, 300))) : "";
                // 非GET请求 需要向其 重定向路径 追加 `_大写的请求类型名.shtml` 后缀（原请求路径末尾的 `/` 会被替换，但不考虑 reqPath 中含有 `?` 的情况）。加 `.shtml` 是为了使接口匹配 `devServer.proxy` 的规则 
                let redirectLocation = reqPath.replace(/\/?$/, "_" + reqMethod.toUpperCase() + ".shtml");
    
                // 必须配合将statusCode改为3XX，浏览器才会执行重定向（否则将忽略Location响应头信息）
                proxyRes.headers["Location"] = redirectLocation + querySearch;
    
                // 使用307会保持POST方式，使用302则无法改变PUT请求类型，而303可以让所有请求方式都使用GET重定向 并且禁止缓存。（注意，改res.statusCode是没用的！）
                proxyRes.statusCode = 303;
    
                console.log("\t\t\t已使用 303 重定向至地址 [%s] ", redirectLocation, querySearch ? ("，并附上参数 [" + querySearch + "]") : "（没有POST参数）");
            }
        }
    };

    // 如果使用的是 本地的静态模拟服务器，则需要启用 路径重写
    if (useStaticMockServer === true) {
        // 路径重写
        proxyOptions.pathRewrite = function (path, req) {
            // 先替换数字（路径中的 数字 是可变的，但模拟数据地址只有一份，所以先重写路径）
            return path.replace(/\/\d+([\/|\.])/g, "/10000$1")
                        // 再替换一次数字（因为上面的正则无法处理 连续两个数字目录 如 aa/123/456/bb.shtml ，所以对这种特殊路径 再执行一次正则替换）
                        .replace(/(\/\d+)\/\d+([\/|\.])/, "/$1/10000$2")
                        // 将 `.shtml` 结尾的请求 “当作” `/` 结尾
                        .replace(/\.shtml\/?/, "/");
        };
    }

    return proxyOptions;
};


module.exports = {
    now,
    createProxyOptions
};