:: 先关闭回显
@echo off

::设置窗口标题（用 当前执行的批处理文件全路径名）。【%0】中间加上【~】意思是去掉外侧双引号
title=%~0

:: 获取本机实时IP
for /f "tokens=4" %%a in ('route print^|findstr 0.0.0.0.*0.0.0.0') do (
    set IP=%%a
)

:: 使用 webpack-dev-server 提供对外服务站点，端口 8588（IP会自动获取）
set startWebpack=webpack-dev-server --inline --progress --env.buildOptions.devServerHost=%IP% --env.buildOptions.devServerPort=8588

:: 先切换当前目录到上一级（因为bat命令需要在 webpack.config.js 文件所在目录执行）
cd ../

:: 由于关闭了繁杂的回显，所以手动输出 执行的命令（“^”是转义符号）
echo %cd%^>%startWebpack%

:: 最后的“|| pause”是为了在 webpack-dev-server 命令执行失败之后，也能暂停下来让我们看到错误信息
(%startWebpack% && pause) || pause
:: 在这里加 pause 并不能让 webpack-dev-server 命令执行结束之后运行，因为命令之间是非阻塞的。所以需要用上面的方法，在命令后面加“&& pause”。