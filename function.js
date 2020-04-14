function hello(){
  console.log("Hello World!");
}


function helloYou(name) {
  console.log("Hello "+ name);
}

function addNum(num1,num2) {
  console.log(num1+num2);
}

//default paramters
function helloSomeone(name="Frankie") {
  console.log("Hello "+name);
}

//returning values
function formal(name="sam",title="sir") {
  return title+" "+name
}

function timesFive(numInput) {
//local scope
  var result = numInput*5
  return result
}

//Global Scope
var v="GLOBAL V";
var stuff="GLOBAL STUFF";

function fun(stuff) {
  console.log(v);
  stuff="Reassign stuff inside fun";
  console.log(stuff);
}

fun();
console.log(stuff);
