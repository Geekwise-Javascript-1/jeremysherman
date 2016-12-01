// create 2 arrays for while loop assignment
// call the 1st array monsters 
// call the 2nd array strength
// create a for loop to pick corresponding monster
// e.g. 'dragon has a strength of 100 points'
// console log result

// Do/While loop

// For loop
var monsters = ['jeff', 'greg', 'john', 'jake', 'jamimuh'];
var strength = [100, 200, 300, 400, 500];

console.log(monsters);
console.log(strength);


for(var i = 0; i < monsters.length; i++){
    console.log(monsters[i] + ' has a strength of ' + strength[i] + ' points.');
}

// while loop

var j = 0;
while( j < monsters.length ){
    console.log(monsters[j] + ' has a strength of ' + strength[j] + ' points.');
    j++; // j = j + 1 // j-- // i++; This is the incrementer and i--; decrementer
}

// assignment example in class //
//function paul(){
//    var msg = "my fav movie is ";
//    //alert(msg + mov);
//    console.log('before the return');
//    return msg + mov; 
//    console.log('after the return'); //after the return this won't run
//};
//
//var exp = (){
//    var userMov = prompt('what is your fav movie?');
//    //dec(userMov);
//    alert( paul(userMov) );
//    console.log('after the alert');
//}();

