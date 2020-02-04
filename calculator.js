
var express = require("express");
var app = express();
var PORT = 8080;
const calculator = require("./lib/calcFunction");

app.get('/:operator/:num1/:num2', function(req,res){
	var operator = req.params.operator
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);
	var result = calculator.caseOperator(operator, num1, num2);
	res.json(result);
});

app.get("/", function(req, res){
	res.send("hello! please type some math y'all")
});

//listener
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});
