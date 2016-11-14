
/*Function Declaration*/
/*function helloWorldDec(){
   alert('Hello World!');
}*/

//helloWorldDec();

/*
*
*
Function Expression
*
*
*/

/*var helloWorldExp = function(){
    alert('Hello World Again');
}();*/ //() right after curly brace pulls the call immediately

//helloWorldExp();

/*Hoisting - Bring variable names and function declarations to the top*/


//3 function declarations CHALLENGE**
    //greeting function - alert a greeting
    //calculate function - mathematical operation and alert out the result
    //console a color array of three colors

/*
function helloToYou(){
    alert('Hi!');
}

helloToYou();



function calculate(){
    alert(1+2);
};

calculate();

function color(){
    console.log(['red', 'yellow', 'green']);
}

//write 3 function expressions
    //greeting function - alert a greeting
    //calculate function - alert a mathmatical opertion
    //console a color array of 3 colors

var greetingExp = function(){
    alert('Another Greeting');
}();

var calculateExp = function(){
    alert(2-3);
};
calculateExp();
var colorExp = function(){
    console.log(['red', 'yellow', 'green']);
}();
*/



/*
Parameters & Arguments
*/
//parameter is a variable that is used in the function declaration
//argument ia what is pass in when we call the function

/*

function helloDec(name){  //anything in these () are a parameter
    alert('hello' + ' ' + name);
};
helloDec('Jeremy'); //inside these is an argument

var helloExp = function(first, last){
    alert('hi ' + first + ' ' + last);
};
helloExp('jeremy', 'sherman');

//write 3 function declarations CHALLENGE
    //for greeting function - pass in first name & last name
    // for calculate function - pass in two numbers
    // for color function - pass in 3 colors

function helloToYou(greeting){
    alert('Hi!' + ' ' + greeting);
}

helloToYou('How are you?');

function calculate(mathe){
    alert(1+2+mathe);
};

calculate(5*2);

function color(color1, color2, color3){
    //console.log(['red', 'yellow', 'green']);
    console.log(color1, + ' ' + color2, + ' ' + color3)
};
color('blue', 'orange', 'white');


//write 3 function expressions Challenge
    //greeting function - pass in first * last
    //for the calculate function - pass in two numbers
    //for the color function - pass in 3 colors

var greetingExp = function(a, b){
    alert('Another Greeting ' + a + ' ' + b);
}('?', '!');

var calculateExp = function(x, y){
    alert(x * y);
});
calculateExp(4, 5);

var colorExp = function(c1,c2,c3){
    //console.log(['red', 'yellow', 'green']);
    console.log(c1,c2,c3)
    
}('black', 'brown', 'purple');

*/







/*
Function from a Function
*/
/*
function hello(firstname){
    var msg = 'Hello, ' + firstname;  //this is called scope and cannot call inside of the function hello
    popup(msg);
};

function popup(x){
    alert(x);
};

hello('matt');
*/

//challenge write 3 function declarations
    //1st function will expect a firstname and calls the 2nd function
    //2nd function will expect a firstname and concatenate to the last name
    //3rd function will alert out : "Hello " and first & last name

//my work
function one(firstname){
    var fn = firstname;
    console.log(fn)
    two(firstname);
}
one('jeremy');

function two(a){
    var ln = a + ' Sherman';
    console.log(a);
    popup(ln);
}

function popup(ln){
    alert('Hello ' + ln);
};


//example
function fname(f){
    lname(f);
};
fname('matt');
function lname(first){
    var name = first + ' higley';
    pop(name);
};
function pop(msg){
    alert('Hello ' + msg)
}


//open dungeonScript project folder and on script.js: 
//create 4 function declarations
//call them: moveNorth, moveEast, moveSouth, moveWest
//console.log the direction that we're moving
//create a function expression called grid
//grid needs to accept 2 parameters
//call grid passing in 2 numbers (eg: 4,4 or 8,8)









