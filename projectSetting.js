// 项目配置
module.exports = {
    // 开发环境
    "development": {
        // 说明文字，可选
        _cnName: "航程科技-开发环境",
        // 代理主机
        proxyHost: "http://127.0.0.1:8700", // 使用数字ip，在无网络情况下 Node代理 才不会报错
        // proxyHost: "http://localhost:8700",
        // 开发服务器监听的 域名
        devServerHost: "localhost",
        // 开发服务器监听的 端口号
        devServerPort: 8500,
        // 使用本地的静态模拟服务器时，需要配置为 true （这会 启用路径重写及重定向功能）
        useStaticMockServer: true,
        // 指定 source mapping 的生成方式（原项目值为 source-map ，下面改为vue-cli的值）
        devtool: "eval-source-map",
        // 发布目录
        publicPath: '/app'
    },
    
    // 开发联调环境
    "integration": {
        _cnName: "开发联调环境",
        // 省略配置，则相当于使用 "development"配置的值
        proxyHost: "http://192.168.1.30:8080",
        devServerPort: 8585,
        useStaticMockServer: false,
    },

    // 测试环境
    "testing": {
        _cnName: "测试环境",
        proxyHost: "http://192.168.1.210:8080",
        useStaticMockServer: false,
        devtool: "none",
    },

    // 生产环境
    "production": {
        _cnName: "生产环境",
        // proxyHost: "",
        useStaticMockServer: false,
        devtool: "none",
    }
};