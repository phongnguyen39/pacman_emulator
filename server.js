var express = require('express');
var app = express();


app.use(express.static(__dirname + "/static"));
app.set('/views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function (req,res){
    res.render('index')
})

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
