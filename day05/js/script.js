/*


function myName(){
    var firstName = 'Jeremy';
    var middleName = 'Jonathan';
    var lastName = 'Sherman';
    //return firstName;
}
myName();
*/

//IIFE - Immediately invoked function executable

( function(){
    var firstName = 'Jeremy';
    var middleName = 'Jonathan';
    var lastName = 'Sherman';
    
    //console.log(firstName);
}() ); //everything written in here will not be dumped into the global scope. It is important to not put extra info into the global scope.

function getNums(){
    var a = parseInt( prompt('pick a number') );
    var b = parseInt( prompt('pick another number') );
    
    console.log( 'the answer is: '+doMath(a, b) );
}

function doMath(num1, num2){

    console.log('within do math '+num1);
    console.log('within do math '+num1);
    return num1 + num2; //has to be before the console.log
}
//getNums();

// write 2 functions:
// first a declaration accepting 1 parameter
// second an expression invoking immediately
// create a var asking the user for their fav movie (within exp)
// the expression calls the declaration passing an argument
// pass in this variable through declaration call
// declaration will have: "my favorite movie is: " saved to a variable
// lastly, the declaration alerts a concatination of the string & parameter
/*
//my attempt
var exp2 = function(){
    var movie = prompt('what is your fav movie?');
    acceptOne(movie);
}();

function acceptOne(movie){
    var words = "My favorite movie is: ";
    alert(words + movie);
}

//original example in class to console log out the function dec
function dec(mov){
    var msg = "Your favorite movie is: ";
    console.log(msg + mov);
}
var exp = function(){
    var favMov = prompt('what is your fave movie?');
    dec(favMov);
}();

//changed to a return and alert
function dec(mov){
    var msg = "Your favorite movie is: ";
    return msg + mov;
}
var exp = function(){
    var favMov = prompt('what is your fave movie?');
    alert( dec(favMov) );
}();*/


/*
//A function declaration can be invoked multiple times. while a function expression cannot.

function one(){
    alert('this is function one');
}

one();//regardless where you put the function call it will run because functions and variables get hoisted to the top



var two = function(){
    alert('this is function two');
}();

two(); //will not run if it is placed before on an expressions
console.log(two);*/


// Loops:
// for
// while
// do/while

//For loop
var fruits = ['apple', 'banana', 'orange', 'pear', 'pineapple'];
console.log(fruits);


for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// create 2 arrays
// call the 1st array monsters 
// call the 2nd array strength
// create a for loop to pick corresponding monster
// e.g. 'dragon has a strength of 100 points'
// console log result

var monsters = ['braineater','flesheater','sorceress','frank','hipster'];

var strength = [5, 10, 4, 6, 12];

for(var m = 0; m < 5; m++){
    console.log( monsters[m] + ' has a strength of ' + strength[m] + ' points')
} //value of m only availble inside of this for loop


//While loop
var text = '';
var i = 0;
while( i < fruits.length ){
    console.log( fruits[i] );
    i++;
}

// create 2 arrays for while loop assignment
// call the 1st array monsters 
// call the 2nd array strength
// create a for loop to pick corresponding monster
// e.g. 'dragon has a strength of 100 points'
// console log result

// Do/While loop


var monsters2 = ['jeff', 'greg', 'john', 'jake', 'jamimuh'];
var strength2 = [100, 200, 300, 400, 500];

for(var mm = 0; mm < 5; mm++){
    console.log( monsters2[mm] + ' has a strength of ' + strength2[m] + ' points')