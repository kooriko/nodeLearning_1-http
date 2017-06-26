# NodeJs 自学日志
## 2017/6/25

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
