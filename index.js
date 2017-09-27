
const express = require('express');

const app = new express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/*', (req, res) => {
	res.render('index');
});

app.listen(3000, () => {
	console.log('Magic happening at 3000');
});