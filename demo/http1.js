const fs = require('fs');
const http = require('http');

http.createServer((req,res)=> {
	fs.readFile('./htmls/index.html', (err, data)=> {
		if(err){
			console.log(err);
		}else{
			res.writeHead(200, {'Content-Type': 'text-plain'});
			res.write(data);
			res.end();
		}
	})
}).listen(8080);

console.log('running at port 8080...');
