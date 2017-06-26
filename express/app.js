const express = require('express');

const app = express();

app.get('/', (req, res)=> {
	res.header({'content-type': 'text/html'});
	res.send('<h1>Hello express!</h1>');
}).listen(8080, ()=> console.log('app is running at port 8080...'));
