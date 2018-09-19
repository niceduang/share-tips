const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	// res.send('hello word');
	// 模拟响应时间
	setTimeout(()=>{
		res.send('hello word');
	},3000);
});

app.listen(3000);