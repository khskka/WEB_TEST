const express = require('express');
const app = express();

app.listen(5555, function() {
    console.log('node server start to khskka')
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})