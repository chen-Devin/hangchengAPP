Webpack 脚手架项目使用说明 v1.0.1
================================

介绍
----
本 **Webpack脚手架项目** 融合了 **Grass-webpack项目初始化模版2.1** 、 **Webpack 代理环境1.4.3** 、 **vue-cli 2.9.1**脚手架生成项目 的配置，
最终提供 可直接用于Webpack启动的配置文件。  
另有单独的纯配置文件 `projectSetting.js` ，支持配置 不同环境的构建参数。


关于文件和目录
-------------

+ _projectSetting.js_ 项目配置文件，主要在这里修改环境配置。比如 **代理主机**、**监听端口** 等
+ _webpack.config.js_ **Webpack** 的核心配置
+ _*.bat_ 文件，为 实际执行的 **Webpack 命令** 快捷方式
+ _.babelrc_ 和 _.postcssrc_ 为 **Webpack插件** 依赖的配置，不要轻易改动和删除
+ _src/_ 和 _static/_ 为实际项目资源存放地址
+ _dist_ 使用 `webpack` 构建命令输出的最终可发布文件


外部环境依赖
-----------

+ 安装 [**Node.js 环境**](https://nodejs.org/en/)
+ 安装 **cnpm** ：安装完 **Node 环境** 之后，在 CMD命令中执行 `npm install -g cnpm --registry=https://registry.npm.taobao.org`
+ 需要 **静态模拟数据服务器** 来提供本地模拟数据，搭建步骤详见 **Webpack 代理环境** 的说明
+ 第一次启动之前，需要先在当前目录下，执行 `cnpm install` 安装项目依赖


启动方式
-------

在 CMD命令中执行 `webpack-dev-server --inline --progress` 或双击 `【快捷启动】localhost - 8500.bat` 文件即可


Change log
----------

### v1.0 2017-11-22 17:32:23
+ 将 vue-cli 中的 各种Webpack配置 整理并独立出来，提供单独的 **纯配置文件** 以支持配置 不同环境的构建参数
+ 为 **常用的 Webpack 构建场景** 提供 `.bat` 文件，方便直接双击启动

### v1.0.1 2017-11-23 09:16:34
+ 安装 **css预处理器** 所需的依赖，支持 **less** 、 **sass** 、 **stylus** 语法
+ 修复 _webpack.config.js_ 文件中 `resolve` 方法路径错误的问题