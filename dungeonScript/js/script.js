//var hero = {
//    name: prompt('What is your name hero?');
//};
//empty 'hero' object

/*var hero = {
    prompt('what is your name hero');
}; //empty 'hero' object*/
var hero = {}; //empty hero object
hero.name = prompt('What is thy name hero?');

var monsters = []; //empty monsters array
var monTypes = ['Demogorgon', 'Stiches', 'Sorceress', 'Mephisto', 'Diablo', 'Thrall', 'Gorgon', 'Necromancer', 'Medusa', 'Hobgoblin'];

//open dungeonScript project folder and on script.js:
//create 4 function declarations
//call them: `moveNorth`, `moveEast`, `moveSouth`, `moveWest`
//console the direction that we're moving
//create a function expression called `grid`
//`grid` needs to accept 2 parameters
//call `grid` passing in 2 numbers (eg: 4, 4 or 8, 8)

function moveNorth(){
    console.log('moving north');
}
moveNorth();

function moveEast(){
    console.log('moving east');
}

function moveSouth(){
    console.log('moving south');
}

function moveWest(){
    console.log('moving west');
}
moveEast;
moveNorth;
moveWest;
moveSouth;

var grid = function(y, x){
    console.log(y);
    console.log(x);
}(4, 4); //shorthand call
//grid(4, 4); option


























// dungeonScript folder on script.js
// create a var "hero" object;
// prompt user for hero name; (setting object property)
// create a var "monsters" empty array;
// create a var "monTypes" array of monster types 5 - 10


/*var heroName = "What is your name hero?";
prompt(heroName);
var monsters = ['', '', ''];
var monTypes = ['Demogorgon', 'Stiches', 'The Butcher', 'Mephisto', 'Diablo', 'Thrall', 'Gorgon', 'Necromancer', 'Medusa', 'Hobgoblin'];*/