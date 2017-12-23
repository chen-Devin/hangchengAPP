:: 先关闭回显（因为使用变量之后，输出的命令不直观，所以关闭默认的回显，改为自定义输出指令）
@echo off

::设置窗口标题（用 当前执行的批处理文件全路径名）。【%0】中间加上【~】意思是去掉外侧双引号
title=%~0

:: 使用 webpack-dev-server 的默认配置 启动开发服务器
set startWebpack=webpack-dev-server --inline --progress

:: 由于关闭了繁杂的回显，所以手动输出 执行的命令（“^”是转义符号）
echo %cd%^>%startWebpack%

:: 最后的“|| pause”是为了在 webpack-dev-server 命令执行失败之后，也能暂停下来让我们看到错误信息
(%startWebpack% && pause) || pause
:: 在这里加 pause 并不能让 webpack-dev-server 命令执行结束之后运行，因为命令之间是非阻塞的。所以需要用上面的方法，在命令后面加“&& pause”。