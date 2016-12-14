//引入 path 内置模块
var path = require('path');
//引入 express 依赖模块，用来启动静态服务器
var express = require('express');

//实例 express
var app	= express();

console.log(__dirname);
//拼接物理路径，用来指定虚拟路径的访问
var viewsPath = path.join(__dirname,'views');
console.log(viewsPath);
//指定访问 页面 的路径
//app.use('/',express.static(path,join(__dirname,'views')));
app.use('/',express.static(viewsPath));

//拼接物理路径，用来指定虚拟路径的访问（静态资源文件）
var publicPath = path.join(__dirname,'public')
//指定访问静态资源文件的路径
app.use('/public',express.static(publicPath));

app.get('/login',function(req,res){
	res.send('ha ni ma')
})



//监听端口 9999，用来启动服务
app.listen(6842,function(){
	console.log('server run at port 9999')
});


//模块导出
module.exports = app