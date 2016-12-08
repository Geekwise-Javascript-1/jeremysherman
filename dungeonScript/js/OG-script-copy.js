//var hero = {
//    name: prompt('What is your name hero?');
//};
//empty 'hero' object

/*var hero = {
    prompt('what is your name hero');
}; //empty 'hero' object*/
var hero = {}; //empty hero object
//hero.name = prompt('What is thy name hero?');

var monsters = []; //empty monsters array
var monTypes = ['Demogorgon', 'Stiches', 'Sorceress', 'Mephisto', 'Diablo', 'Thrall', 'Gorgon', 'Necromancer', 'Medusa', 'Hobgoblin'];

var tableHolder = document.querySelector('#table');
//tableHolder = document.getElementById('table');
var maze, cells, thisCell;

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

var grid = function(y, x){
    console.log(y);
    console.log(x);
    
    var totalCells = y * x;
    cells = [];
    var visited = [];
    
    for(var i = 0; i < y; i++){
        cells[i] = [];
        visited[i] = [];
        
        for(var j = 0; j < x; j++){
            cells[i][j] = [0, 0, 0, 0];
            visited[i][j] = false;
        }
    }
    
    var currentCell = [ Math.floor(Math.random() * y), Math.floor(Math.random() * x) ];
    console.log('The starting cell: ' + currentCell + '\n\r----------------\n\r');
    console.log('currentCell is ' + currentCell);
    var path = [ currentCell ];
    console.log('path: ' + path);
    
    visited[ currentCell[0] ][ currentCell[1] ] = true; //current cell 0 and 1 because it is an array
    var numOfVisited = 1;
    
    while( numOfVisited < totalCells ){
        var possible = [
            [ currentCell[0]-1, currentCell[1], 0, 2 ], //targeting going north
            [ currentCell[0], currentCell[1]+1, 1, 3 ], //targeting going east 
            [ currentCell[0]+1, currentCell[1], 2, 0 ], //targeting going south 
            [ currentCell[0], currentCell[1]-1, 3, 1 ] //targeting going west
        ];
        
        var neighbors = [];
        console.log('// Check all four directions.');
        console.log(possible);
        console.log('\n\r// Of the four sides, does a cell exist in each direction?');
        
        for(var k = 0; k < 4; k++){
            if( possible[k][0] > -1 &&
                possible[k][0] < y &&
                possible[k][1] > -1 &&
                possible[k][1] < x &&
                !visited[ possible[k][0] ][ possible[k][1] ])
                {
                    neighbors.push( possible[k] );
                }
        }
        console.log(neighbors);
//        numOfVisited++;
        
        if( neighbors.length ){
            
            var next = neighbors[Math.floor(Math.random() * neighbors.length)];
            console.log('\n\r// Of the available direction, randomly selection one. \n\r// The selected cell to move to is: '+next+'\n\r');
            
            cells[ currentCell[0] ][ currentCell[1] ][ next[2] ] = 1;
            console.log('cells[currentCell[0] ][ currentCell[1] ][ next[2] ]: cells['+currentCell[0]+']['+currentCell[1]+']['+next[2]+'] = 1');
            
            cells[ next[0] ][ next[1] ][ next[3] ] = 1;
            console.log('cells[ next[0] ][ next[1] ][ next[3] ]: cells['+next[0]+']['+next[1]+']['+next[3]+']');
            
            visited[ next[0] ][ next[1] ] = true;
            console.log('visited[ next[0] ][ next[1] ]: visited['+next[0]+']['+next[1]+'] = true');

            numOfVisited++;
            
            currentCell = [ next[0], next[1] ]; //gives us the y and x axis
            console.log('\n\rcurrentCell: ' + currentCell + '\n\r--------------------');
            path.push(currentCell);
            console.log('');
            
        }else{
            currentCell = path.pop();
            console.log('\n\r// No Neighbors found. currentCell: ' + currentCell + '\n\r---------------------\n\r');
        }
        
        
        
        
   
    }//end while loop
    
    gridBuilder();
}(8, 8); //shorthand call
//grid(4, 4); option
//y is for rows and x is for columns

function gridBuilder(){ //this creates <table>
    maze = document.createElement('table');
    tableHolder.appendChild(maze);
    
    for(var i = 0; i < cells.length; i++){ //<this creates the <td> inside
        maze.insertRow(i);
        
        for(var j = 0; j < cells[i].length; j++){
            console.log(maze);
            maze.firstChild.childNodes[i].insertCell(j);
            thisCell = maze.firstChild.childNodes[i].childNodes[j];
            
            for(var k = 0; k< 4; k++){
                switch (k) {
                    case 0:
                        cells[i][j][k] ? thisCell.classList.remove('bt') : thisCell.classList.add('bt');
                        break;
                    case 1: 
                        cells[i][j][k] ? thisCell.classList.remove('br') : thisCell.classList.add('br');
                        break;
                    case 2: 
                        cells[i][j][k] ? thisCell.classList.remove('bb') : thisCell.classList.add('bb');
                        break;
                    case 3: 
                        cells[i][j][k] ? thisCell.classList.remove('bl') : thisCell.classList.add('bl');
                        break;
                    default:
                        
                }
            }
                  
        }
    }
}
























// dungeonScript folder on script.js
// create a var "hero" object;
// prompt user for hero name; (setting object property)
// create a var "monsters" empty array;
// create a var "monTypes" array of monster types 5 - 10


/*var heroName = "What is your name hero?";
prompt(heroName);
var monsters = ['', '', ''];
var monTypes = ['Demogorgon', 'Stiches', 'The Butcher', 'Mephisto', 'Diablo', 'Thrall', 'Gorgon', 'Necromancer', 'Medusa', 'Hobgoblin'];*/