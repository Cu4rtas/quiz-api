var express = require('express')
var bodyparser = require('body-parser')

var app =express();

app.use(bodyparser.json())
app.use('/', require('./routes/factorial'));

var port = 3001;

app.listen(port, () => {
    console.log(`heyy http://localhost:${port}`);
})
