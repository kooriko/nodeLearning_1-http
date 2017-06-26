const http = require('http');
const fs = require('fs');

http.createServer((req,res)=> {
	if(req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(`${__dirname}/htmls/index.html`).pipe(res);
	}else if(req.url === '/about'){
		res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
		res.write(`<h1>这是About页！</h1>`);
		res.end();
	}else{
		res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
		res.write(`<h1 style="color: red;">404 Not found！</h1>`);
		res.end();
	}
}).listen(8080);

console.log('running at port 8080...');
