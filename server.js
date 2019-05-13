var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var handlebars = require('express-handlebars');

app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require('./controller/appCtr')

app.use(routes)

app.listen(PORT, function () {
    console.log(`app is listening on port: ${PORT}`)
})