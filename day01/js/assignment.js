// Jeremy Sherman 11/01/16 Javascript 1

// day01 Assignment
var num3 = 12,
    num4 = 0x1E,
    text2 = "Answer equals: ";

var sum2 = (num3) + (num4);

var answer = (text2).concat(sum2);

console.log(answer);

// (This was my first attempt) What is the different between this one and above? I added concatenate above on my second attempt but what is the result of this one below? How does the computer see each one in the console? Is this merely printing both var in the console log()? What does concatenate do? What are its future uses?
var num1 = 12,
    num2 = 0x1E,
    text = "Answer equals: ";

var sum = (num1) + (num2);

console.log(text, sum);




//var b = (30).toString(16); correct string
//var b = parseInt('0x'+(30)).toString(16)); how you get the hex number in javascript because its a base 16 system.

//var d = a + b;
//console.log (c + d);








/*
On the assignment.js file
Create three variables.

The first two should store the numbers:
values 12 and 30
(for an extra challenge... convert 30 into a hexadecimal)
The third variable should store the string "Answer equals: "
Add the first two numeric variables together using the + operator, save this to a new variable.
Concatenate the string from your third variable with the number from your fourth (new) variable. Save this to a new variable called "answer".
Console log answer.
*/

var str1 = "Hello ";
var str2 = "world!";
var str3 = " Have a nice day!";
var res = str1.concat(str2, str3);

console.log(res);