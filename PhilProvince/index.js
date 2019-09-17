const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views','views');


app.get('/index', function (req, res) {
  res.render('sample')
})
app.listen(8081);
