//object methods are just functions inside the object
var carInfo={
    make:"Toyota",
    year:1996,
    model:"Camry",
    carAlert:function(){
        alert("We've got a car here")
    }
}

var simple={
    prop:"hello",
    myMethod:function(){
        console.log("The myMethod was called")
    }
}
undefined
simple
{prop: "hello", myMethod: ƒ}
console.dir(simple)
Object
undefined
simple.myMethod
ƒ (){
        console.log("The myMethod was called")
    }
simple.myMethod()
The myMethod was called
undefined




//this keywork is set to the object the method is called on
var myObj={
    name :"Jose",
    greet:function(){
        console.log("Hello " + this.name)
    }
}
undefined
myObj
{name: "Jose", greet: ƒ}
myObj["name"]
"Jose"
myObj.greet
ƒ (){
        console.log("Hello " + this.name)
    }
myObj.greet()
Hello Jose
undefined
