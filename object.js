var carInfo={make:"Toyota", year:1990, model:"Camry"}
undefined
carInfo
{make: "Toyota", year: 1990, model: "Camry"}
carInfo["make"]
"Toyota"




var myNewO  = {a:"hello", b:[1,2,3] , c:{inside:['a','b','c']} }
undefined
myNewO
{a: "hello", b: Array(3), c: {…}}

myNewO["a"]
"hello"

myNewO["b"][1]
2

myNewO["c"]["inside"]
(3) ["a", "b", "c"]

myNewO["c"]["inside"][1]
"b"




//Changing value of a key
carInfo
{make: "Toyota", year: 1990, model: "Camry"}
carInfo["year"]=2006;
2006
carInfo
{make: "Toyota", year: 2006, model: "Camry"}

//reference to oject when values are number
carInfo["year"] += 1;
2007
carInfo
{make: "Toyota", year: 2007, model: "Camry"}

//For large objects, to show the entire object
console.dir(carInfo)
VM1325:1 Objectmake: "Toyota"year: 2007model: "Camry"__proto__: Object
undefined


//To Iterate through objects, using FOR IN
//no specific order

//to access key
for(key in carInfo){
    console.log(key)
}
make
year
model

//to access items/value as well
for(k in carInfo){
    console.log(k)
    console.log(carInfo[k])
}
make
Toyota
year
2007
model
Camry
undefined
