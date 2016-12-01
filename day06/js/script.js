var fruits = ['Cherry', 'Apricot', 'Mango', 'Raspberry', 'Honeydew', 'Watermelon'];

console.log(fruits.length); //applying a method to the array .length

fruits.push('Kiwi'); //pushes additional entry into array
console.log(fruits);

var str = fruits.join(', '); // join connects each item of the array into a string with the character you decide
console.log(str);

fruits.pop(); //removes the last item of array
console.log(fruits);

fruits.unshift('Pineapple'); //unshift puts entry at beginning of array
console.log(fruits);

fruits.shift(); //removes
console.log(fruits);


console.log(fruits.reverse()); //reverses order
var numbers = [5,21,2,12,110]; //pain in the a it sorts on first number
console.log(numbers.sort()); //sorts elements alphbetically

var a = ['a', 2, 1, 'A', 'And', 'ANd'];
console.log(a.sort()); //numbers first and uppercse first


fruits.splice(x, y, string); // x=> begin of index, y=> how many to take away, string => what to add

fruits.splice(2, fruits.length, 'Pomegranate'); //0=add 1=takes out fruits.length takes out all.
console.log(fruits);

var b = fruits.splice(2, 2); // cutting from array with using a var b
console.log(b);
console.log(fruits);

//slice (x, y)<-- x=> begin index, y=> end index (not including)
var myFruits = fruits.slice(1, 3); //will start at position and end the fruit before the number
console.log(myFruits);



After the break




if statements


 4 != 5

console.log(1);
console.log(!(2-1));
console.log(!!!!1);

if(/* is true */ 1 ){
    //run this code
    alert('it is true');
} else{
    alert('it is false');
}

var userResp = prompt('Do you like cats?');

if( userResp == 'yes'){
    alert('cat lover');
}
else if( userResp == 'sometimes'){
    alert('birds lover');
}
else{
    alert('hates cats');
}

var randNum = Math.floor( Math.random()*11 );
var userGuess = parseInt( prompt('pick a number 0 & 10') );

 if user got it right. 'thumps up' 
 sorry... too high
 sorry.. too low

 && == add
 || == or

if(userGuess <= 10 && userGuess >= 0){
    if( userGuess == randNum){
        alert('thumbs up!');
    } else if( userGuess > randNum ){
        alert('too high');
    } else if( userGuess < randNum){
        alert('too low');
    }
}else{
    alert('pick a number between 0 & 10');
}
console.log(randNum);

 get gender & get true or false to ice cream
 is user male
 is user female
 if user likes ice cream

var userAnswer = prompt( 'Enter your gender' );
var userIce = prompt('Do you like icecream?');
if( userAnswer == 'male' && userIce =='yes'){
    alert('You are male and you like ice cream');
}
else if( userAnswer == 'female' && userIce =='yes'){
    alert('You are female and you like ice cream');
}
else if( userAnswer == 'male' && userIce =='no'){
    alert('You are male and you dont ice cream');
}
else if( userAnswer == 'female' && userIce =='no'){
    alert('You are female and you dont ice cream');
}





