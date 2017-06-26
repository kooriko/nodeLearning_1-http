# NodeJs 自学日志
###### 2017/6/25

## 搭一个服务器！
NodeJs搭建服务器非常的容易。

	const http = require('http');

	http.createServer((req,res)=> {
		res.writeHead(200,{'Content-Type': 'text/html'});
		res.write('<h1>Hello NodeJs</h1>');
		res.end();
	}).listen(8080);

其中`http.createServer`的方法，接收一个回调函数。
NodeJs约定，该回调第一项为request（客户端来的请求），第二项为response（该服务器发出的响应）。
response中整合了一系列的方法：

* `response.writeHead()`
该方法用以设置响应头，第一个参数是状态码，第二个参数是响应头键值对对象。
* `response.write()`
该方法用以设置响应体，参数是一个字符串，即真正展示在页面中的信息。
* `response.end()`
该方法用以结束服务器对该resquest的回应。

需要注意的是 `response.write('<h1>Hello NodeJs</h1>')` 再 `response.end()`，
和直接 `response.end(<h1>Hedllo NodeJs</h1>)` 是等价的。

在该项目下的http2.js中可以通过判断 `resquest.url` 的来源，来决定展示何种页面，这已经非常像一个小型的网站了。

## express的应用
事实上NodeJs的http模块是比较底层的，在开发中通常使用 **express框架** 来搭建服务器。
express是NodeJs中应用最广泛的web框架。

express官网： http://expressjs.com/

## 开始express！
首先我们需要安装 express

	$ npm i express

（需要注意的是，这里选择了直接安装，一般在开发中会选择 --save --dev）
如果 node_modules 中出现了 express 文件夹，则说明安装成功。

## 编写应用
在新建的`app.js`中编写我们的应用。
引入express模块并创建一个express实例。（没写new是因为它是一个语法糖）

	const express = require('express');
	const app = express();

	app.get('/', (req,res)=> {
		res.header({'content-type': 'text/html'});
		res.send('<h1>Hello express!</h1>');
	})
	app.listen(8080,()=> console.log('app is running at port 8080...'));


app作为express的实例，拥有很多种方法。这些方法是基本上是request请求的method名。比如`get` `post` `put` `delete` 等。
它第一个参数是请求地址，第二个参数是执行的回调，并且该回调和NodeJs的HTTP模块的大多数API一样约定了第一个参数为`request`，第二个参数为`response`。
request中任何信息都可以通过，request对象访问到。
当然希望响应的信息也都可以通过设定response对象来实现。

该例子向主页使用get方法的请求，响应一句话用 html 渲染的一个标题 `Hello express!`。
并且监听着`8080`端口，使得端口得以持续开放，为所有访问 `127.0.0.1:8080` 的提供服务。

## 执行它！

	$ node app.js

之后你会看到我们在 app.listen 中打印的 `app is running at port 8080...`，证明我们的 app 已经成功运作了！
访问`127.0.0.1:8080`，如果看到了![hello express!](/express/1.png "你成功了！")，恭喜你！你已经成功地运行了一个express程序！如果没有看到的话请review一下自己的代码。
