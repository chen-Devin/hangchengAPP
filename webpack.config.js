/**
 * @file
 * 本配置文件 融合 grass-webpack项目初始化模版2.1 、 Webpack代理环境1.4.3 、 vue-cli2.9.1脚手架生成的项目 的配置，
 * 最终提供 可直接用于webpack启动的配置文件。
 * 
 * 为了方便自定义配置，现支持 在 `projectSetting.js` 文件中 配置不同环境的构建参数。
 */

const path = require("path");
// 工具方法：获取 格式化后的当前时间
const now = require('./_util/util').now;

const webpack = require('webpack');
// `webpack.dev.conf.js` 文件引入
const HtmlWebpackPlugin = require('html-webpack-plugin');

// vue-cli 内置的工具文件
const vueCliUtils = require('./_util/vueCliUtils');

// 该模块为了输出友好异常，这里省略
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
// 如果使用了 FriendlyErrorsPlugin ，则需要配置 webpackConfig.devServer.quiet: true

// 该模块是为了检查端口是否可用，这里去掉该检测
// const portfinder = require('portfinder');


//:vue-cli 来自 `./build/webpack.base.conf.js` 的方法
const resolve = function (dir) {
    return path.join(__dirname, '.', dir);
}
//:vue-cli 来自 `./build/utils.js` 的方法
const assetsPath = function (_path) {
    return path.posix.join('static', _path);
}



// 读取项目配置文件
var projectSetting = null;
try {
    projectSetting = require("./projectSetting");

    if (!projectSetting || !Object.keys(projectSetting).length) {
        console.warn("\n【提示】 当前文件夹下的 `projectSetting.js` 文件配置可能有误，暂无法获取相关配置信息", now());
    }
    else {
        console.log("\n【成功】 读取项目配置文件", now());
    }
}
catch (e) {
    console.error("\n【重要】！【重要】！【重要】！ 请检查当前文件夹下的 `projectSetting.js` 文件是否存在！", now());
    projectSetting = {};
}


// 创建proxy处理规则，参数可以设置 代理主机（默认使用 本地JSON模拟服务器）
var createProxyOptions = require('./_util/util').createProxyOptions;


// 构建变量集合
const buildVariables = {
    // 开发环境
    "development": {
        // 内部使用，如log
        _cnName: "开发环境",
        // 代理主机（默认为本地模拟数据 静态服务器）
        proxyHost: "http://localhost:8700",
        // 开发服务器监听的 域名
        devServerHost: "localhost",
        // 开发服务器监听的 端口号
        devServerPort: 8500,
        // 使用本地的静态模拟服务器时，需要配置为 true （这会 启用路径重写及重定向功能）
        useStaticMockServer: true,
        // 指定 source mapping 的生成方式（原项目值为 source-map ，下面改为vue-cli的值）
        devtool: "eval-source-map", //:vue-cli
        // 发布目录
        publicPath: '/',
        // 详见 './config/index.js' module.exports.dev.cssSourceMap 的解释
        vueSourceMapEnabled: false,
        // 详见 './build/utils.js' 的 generateLoaders 方法注释
        vueStyleExtractText: false
    },

    // 开发联调环境
    "integration": {
        _cnName: "开发联调环境",
        // 省略配置，则相当于使用 "development"配置的值
        // proxyHost: "",
        useStaticMockServer: false,
    },

    // 测试环境
    "testing": {
        _cnName: "测试环境",
        proxyHost: "http://192.168.1.210:8080",
        useStaticMockServer: false,
        devtool: "none",
        // TODO: 解决vueStyleExtractText设置为true时的报错（可能需要根据 vue-cli 的 /build/build.js 文件里的逻辑来加工处理 ）
        // vueStyleExtractText: true,
    },

    // 生产环境
    "production": {
        _cnName: "生产环境",
        useStaticMockServer: false,
        devtool: "none",
        // vueStyleExtractText: true,
    }
};
// 因为 Object.assign 不支持深拷贝，所以需要将每个属性都分开 assign
const combineBuildVariables = {};
// 项目配置文件 的值优先
Object.keys(buildVariables).forEach((environmentType, i) => {
    combineBuildVariables[environmentType] = Object.assign({}, buildVariables[environmentType], projectSetting[environmentType]);
});


// 根据构建方案 生成webpack配置对象
const createWebpackConfig = function (buildWay, buildOptions) {
    // 构建变量集合，默认使用 开发环境配置
    const buildVariable = Object.assign({}, combineBuildVariables.development, combineBuildVariables[buildWay], buildOptions);
    // 开发服务器监听的域名和端口号
    const devServerHost = buildVariable.devServerHost;
    const devServerPort = buildVariable.devServerPort;
    // 代理主机
    const proxyHost = buildVariable.proxyHost;
    // 区分模拟数据来源的变量（用来配置 是否启用 路径重写及重定向功能）
    const useStaticMockServer = buildVariable.useStaticMockServer;

    // webpack核心配置
    const webpackConfig = {
        entry: {
            app: './src/main.js'
        },
        
        //:vue-cli 按照 `webpack.base.conf.js` 中的配置
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                '@C': resolve('src/components'),
                '@M': resolve('src/multiComponents'),
                '@P': resolve('src/pages'),
                '@A': resolve('src/assets'),
            }
        },
        
        // 前端构建输出配置
        output: {
            publicPath: buildVariable.publicPath,
            filename: "[name].js",
            path: path.resolve(__dirname, "./dist"),
        },

        module: {
            //:vue-cli merge('./build/webpack.base.conf.js', './build/webpack.dev.conf.js')
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: vueCliUtils.cssLoaders({
                            sourceMap: buildVariable.vueSourceMapEnabled,
                            extract: buildVariable.vueStyleExtractText
                        }),
                        cssSourceMap: buildVariable.vueSourceMapEnabled,
                        transformToRequire: {
                            video: 'src',
                            source: 'src',
                            img: 'src',
                            image: 'xlink:href'
                        }
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: [resolve('src'), resolve('test')]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: assetsPath('img/[name].[hash:7].[ext]')
                    }
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: assetsPath('media/[name].[hash:7].[ext]')
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: assetsPath('fonts/[name].[hash:7].[ext]')
                    }
                }
            ].concat(vueCliUtils.styleLoaders({
                // sourceMap: require('../config').dev.cssSourceMap
                sourceMap: false,
                usePostCSS: true
            }))
        },

        plugins: [
            // ------------- vue-cli -------------
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
            // new webpack.NoEmitOnErrorsPlugin(),
            // ------------- vue-cli -------------

            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html',
                inject: true
            })
        ],
    
        // 开发服务器 主要配置项
        devServer: {
            // ------------- vue-cli -------------
            // clientLogLevel: 'warning',
            historyApiFallback: true,
            hot: true,
            // open: require('../config').dev.autoOpenBrowser,
            // overlay: require('../config').dev.errorOverlay ? {
            //   warnings: false,
            //   errors: true,
            // } : false,
            watchOptions: {
                // require('../config').dev.poll
                poll: false,
            },
            // ------------- vue-cli -------------

            // 开发服务器监听的 域名
            host: devServerHost,
            // 开发服务器监听的 端口号
            port: devServerPort,
    
            // 发布目录（一般默认为“/”）
            publicPath: buildVariable.publicPath,
    
            // 可以同时代理若干个不同的数据源
            proxy: {
                // 自定义的接口代理（可选）
                "/devApi": {
                    // 可以自定义代理主机
                    target: createProxyOptions("http://somesite.me:8080", useStaticMockServer)
    
                    // 若changeOrigin设置为true，则http状态码由200改为301，响应数据由直接返回改为301重定向（会多一次http请求，在响应头中的location会体现proxy来源内容的 host及port，所以可能存在跨域问题）
                    // changeOrigin: true
    
                    // https配置
                    // secure: false
                },
                // 如果需要其它接口代理，也可以继续在这里添加，如下
                // "/common/district/": createProxyOptions("http://192.168.1.210:8080", false),
    
                // 默认接口代理配置（检测环境的测试文件中会用到）
                "/api": createProxyOptions(proxyHost, useStaticMockServer),

                // 以 .shtml 结尾的url都是接口请求
                "**/*.shtml": createProxyOptions(proxyHost, useStaticMockServer),
                "**/*.shtml/": createProxyOptions(proxyHost, useStaticMockServer),
            }
        },
        devtool: buildVariable.devtool
    };

    // 打印 构建信息
    console.log("\n---------------------------------------- %s 执行 [%s] 构建 ----------------------------------------\n", now(), buildVariable._cnName);
    // 详细的构建配置信息
    console.log("构建配置信息：", require("util").inspect(buildVariable), "\n");

    return webpackConfig;
};

// 使用 Function 方式的 Export 则可以获取到 env参数
module.exports = function (env = {}, argv) {
    return createWebpackConfig(env.buildWay, env.buildOptions);
};