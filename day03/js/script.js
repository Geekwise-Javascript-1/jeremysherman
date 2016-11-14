/*


var theDate = new Date();
console.log(theDate.getDay()); //running method of the day Sun0 mon1 tue2 etc
console.log(theDate.getMonth()); //Get Month Jan0 Feb1 Mar2
console.log(theDate.getDate()); //running method of the date
console.log(theDate.getFullYear()); //running method of the year




//https://goo.gl/obzAhL for more info on this toLocaleString

console.log( theDate.toLocaleString('us-en', {weekday: 'long'}) ); // long
console.log( theDate.toLocaleString('us-en', {
    weekday: 'short',
    month: 'long',
    year: 'numeric'
    
}) );
*/
var theDate = new Date();
console.log(theDate.getDay());

//create a var for first name & prompt user;
//create var for a last name & prompt user;
//create a var for bday & prompt user (formatting: mm/dd/yyyy);
//alert "Matthew Hidley's birthday is Saturday 2nd 1999";


/*
var firstname = prompt('Enter Your First Name');

var lastname= prompt('Enter Your Last Name');

var theDate = new Date( prompt('What is your bday? (format:mm/dd/yyyy)'));
alert(
    firstname +
    ' ' +
    lastname +
    '\'s birthday is ' +
    theDate.toLocaleString('us-en', {weekday:'long'}) +
    ', ' +
    theDate.toLocaleString('us-en', {month:'long'}) +
    ' ' +
    theDate.getDate() + 
    ', ' +
    theDate.getFullYear()
);
*/

/*
if(x=1 || x=11 || x=21 || x=31){} for st
else if (x=2 ||...) for nd
else if (x=3 ||...) for rd
else th

http://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
*/

/* String Object Manipulation
 */
/*
var firstname = prompt('Enter your name');
console.log(firstname);
console.log(firstname.length); //gives you length of 

console.log(firstname.indexOf('J')); //case sensitive, if you search for j it gives -1
console.log(firstname.indexOf('e')); //gives you first instance of character
console.log(firstname.lastIndexOf('e')); //gives you last instance of character

console.log(firstname.charAt(0)); //Gives a J in console log
console.log(firstname.charAt(firstname.length -1)); //last letter


var lastname = prompt('Enter your last name');
//console.log( firstname.concat(' ').concat(lastname) );
var name = firstname.concat(' ').concat(lastname);

console.log(name.substring(0, firstname.length-0)); //index break from and how long it prints (accepts, two options)

console.log( firstname.toLowerCase() ); //converts whole string to lowercase
console.log( firstname.toUpperCase() ); //uppercase

console.log(firstname.trim()); //removes spaces from the beginning and end of inputed data
*/

//Challenge
//prompt user for first name, last name
//capitalize only the first letter in first name & last name
//alert concatenated name

var firstname = prompt('Enter your first name');
var lastname = prompt('Enter your last name');
//firstname = firstname.toLowerCase();
//lastname = lastname.toLowerCase();
//firstname = firstname.charAt(0).toUpperCase() + firstname.substring(1,firstname.length);

console.log(firstname.substring(1,firstname.length-1));
console.log(firstname.substr(1,firstname.length-1));

lastname = lastname.charAt(0).toUpperCase() + 
           lastname.substr(1,lastname.length-1);

alert(firstname.concat(' ').concat(lastname));

//console.log(EVERYTHING);



