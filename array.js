var countries=["USA","Germany","China"]
(3) ["USA", "Germany", "China"]
countries[0]
"USA"
countries[2]
"China"

//Arrays are mutable(can be reassigned)
countries[2]="France"
"France"
countries
(3) ["USA", "Germany", "France"]

//stringTimes are immutable
var country1="USA"
"USA"
country1[2]
"A"
country1[2]="B"
"B"
country1
"USA"

//an array can  hold mixed data types
var mixed=[true,20,"String"]
undefined
mixed
(3) [true, 20, "String"]
//It report backs how many elements are in an array
mixed.length
3


var myArr=["one","two","three"]
undefined
//remove and add something at the end of array
undefined
var lastItem=myArr.pop()
undefined
lastItem
"three"
myArr
(2) ["one", "two"]
myArr.push("new_item")
3
myArr
(3) ["one", "two", "new_item"]
myArr[myArr.length - 1]
"new_item"


var nested=[[1,2,3],[4,5,6],[7,8,9]]
//Nested Array
undefined
nested
(3) [Array(3), Array(3), Array(3)]
nested.length
3


//Array Iteration
undefined
var arr=["A","B","C"]
undefined
arr
(3) ["A", "B", "C"]
for(i=0;i<arr.length;i++){console.log(arr[i])}
 A
 B
 C
undefined

//FOR OF LOOP
undefined
for(letter of arr){
    console.log(letter)
}
 A
 B
 C
undefined
for(jelly of arr){
    console.log(jelly)
}
 A
 B
 C
undefined
for(jelly of arr){
    console.log("hello")
}
3 hello


//To pass elements of array into a function
for(letter of arr){
    alert(letter)
}
undefined
arr.forEach(alert)
undefined

//For Example
function addAwesome(name){
    console.log(name +" is awesome")
}
undefined
addAwesome("Django")
Django is awesome
undefined
var topics=["Python","Django","Science"]
undefined
topics.forEach(addAwesome)
Python is awesome
Django is awesome
Science is awesome
