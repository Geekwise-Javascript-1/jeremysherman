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
    console.log(monsters[i]);
}

// while loop


for (var m = 0; m < 5; m++){
    console.log( monsters[m] + ' has a strength of ' + strength[m] + ' points');
};