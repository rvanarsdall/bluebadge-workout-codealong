require("dotenv").config();
var express = require("express");
var app = express();
var test = require("./controllers/testcontroller");
var sequelize = require("./db");
var bodyParser = require("body-parser");

var user = require("./controllers/usercontroller");

sequelize.sync();
app.use(bodyParser.json());

app.use(require('./middleware/header')) 


// app.get('/', function(request, response){
// response.send("Hello World")
// })

// app.use('/api/test', function(req,res){

// res.send("This is data from the api/test endpoint")
// })

app.use("/api/user", user);


app.use(require('./middleware/validate-session'))
app.use('/test-controller', test)

app.listen(3000, function() {
  console.log("app is listening on 3000 and hello world");
});
