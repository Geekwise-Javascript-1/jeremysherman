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
var maze, cells, thisCell, exitCell;

//open dungeonScript project folder and on script.js:
//create 4 function declarations
//call them: `moveNorth`, `moveEast`, `moveSouth`, `moveWest`
//console the direction that we're moving
//create a function expression called `grid`
//`grid` needs to accept 2 parameters
//call `grid` passing in 2 numbers (eg: 4, 4 or 8, 8)

var n = document.getElementById('n');
n.addEventListener('click', function(){
    moveNorth();
});

var e = document.getElementById('e');
e.addEventListener('click', function(){
    moveEast();
});

var s = document.getElementById('s');
s.addEventListener('click', function(){
    moveSouth();
});

var w = document.getElementById('w');
w.addEventListener('click', function(){
    moveWest();
});

function moveNorth(){
    console.log('moving north');
    statusCell(thisCell, 'inactive');
    thisCell = [ thisCell[0]-1, thisCell[1]];
    statusCell(thisCell, 'active');
    checkWalls();
}

function moveEast(){
    console.log('moving east');
    statusCell(thisCell, 'inactive');
    thisCell = [ thisCell[0], thisCell[1]+1];
    statusCell(thisCell, 'active');
    checkWalls();
}

function moveSouth(){
    console.log('moving south');
    statusCell(thisCell, 'inactive');
    thisCell = [ thisCell[0]+1, thisCell[1]];
    statusCell(thisCell, 'active');
    checkWalls();
}

function moveWest(){
    console.log('moving west');
    statusCell(thisCell, 'inactive');
    thisCell = [ thisCell[0], thisCell[1]-1];
    statusCell(thisCell, 'active');
    checkWalls();
}

addEventListener('keydown', function(evt){
    evt.preventDefault();
    if(evt.keyCode === 87 || evt.keyCode === 38){
        moveNorth();
        checkWalls();
    }else if(evt.keyCode === 68 || evt.keyCode === 39){
        moveEast();
    }else if(evt.keyCode === 83 || evt.keyCode === 40){
        moveSouth();
    }else if(evt.keyCode === 65 || evt.keyCode === 37){
        moveWest();
    }
});








var grid = function(y, x){
    var totalCells = y * x;
    cells = [];
    var visited = [];
    
    for(var i = 0; i < y; i++){
        cells[i] = [];
        visited[i] = [];
        
        for(var j = 0; j < x; j++){
            cells[i][j] = [0, 0, 0, 0]
            visited[i][j] = false;
        }
    }
    
    var currentCell = [ Math.floor(Math.random() * y), Math.floor(Math.random() * x) ];
    var path = [ currentCell ];
    visited[ currentCell[0] ][ currentCell[1] ] = true;
    var numOfVisited = 1;
    
    while( numOfVisited < totalCells ){
        var possible = [
            [ currentCell[0]-1, currentCell[1], 0, 2 ], 
            [ currentCell[0], currentCell[1]+1, 1, 3 ], 
            [ currentCell[0]+1, currentCell[1], 2, 0 ],  
            [ currentCell[0], currentCell[1]-1, 3, 1 ] 
        ];
        
        var neighbors = [];
        
        for (var k = 0; k < 4; k++){
            if( possible[k][0] > -1 &&
                possible[k][0] < y &&
                possible[k][1] > -1 &&
                possible[k][1] < x &&
                !visited[ possible[k][0] ][ possible[k][1] ])
                {
                    neighbors.push( possible[k] );
                }
        }

        
        if( neighbors.length ){
            
            var next = neighbors[Math.floor(Math.random() * neighbors.length)];
            
            cells[ currentCell[0] ][ currentCell[1] ][ next[2] ] = 1;

            cells[ next[0] ][ next[1] ][ next[3] ] = 1;

            visited[ next[0] ][ next[1] ] = true;

            numOfVisited++;
            
            currentCell = [ next[0], next[1] ];
            path.push(currentCell);

            
        }else{
            currentCell = path.pop();

        }   
        
    } //end while loop
    
    gridStart(path);
    
    
    
}(8, 8);

function gridStart(path){
    gridBuilder();
    
    console.log(path);
    thisCell = statusCell( path[0], 'active' );
    exitCell = statusCell( path[path.length - 1], 'finish' );
    
    console.log(thisCell);
}

function statusCell(cell, status){
    switch(status){
        case 'active':
            maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('active');
            break;
        case 'inactive':
            maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.remove('active');
            break;
        case 'finish':
            maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('exit');
            break;
    }
    return cell;
}




function gridBuilder(){ //this creates <table>
    maze = document.createElement('table');
    tableHolder.appendChild(maze);
    
    for(var i = 0; i < cells.length; i++){ //<this creates the <td> inside
        maze.insertRow(i);
        
        for(var j = 0; j < cells[i].length; j++){
            maze.firstChild.childNodes[i].insertCell(j);
            thisCell = maze.firstChild.childNodes[i].childNodes[j];
            
            for(var k = 0; k < 4; k++){
                switch (k) {
                    case 0:
                        cells[i][j][k] ?  thisCell.classList.remove('bt') : thisCell.classList.add('bt');
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
                        //? eqauls =, : or
                        
                }
            }
                  
        }
    }
}

function checkWalls(){
    var walls = cells[ thisCell[0] ][ thisCell[1] ];
    console.log(walls);
    for(var i = 0; i < 4; i++){
        switch( i ){
            case 0:
                console.log(walls[i]);
                walls[i] ? n.disabled = false : n.disabled = true;
                break;
            case 1:
                console.log(walls[i]);
                walls[i] ? e.disabled = false : e.disabled = true;
                break;
            case 2:
                console.log(walls[i]);
                walls[i] ? s.disabled = false : s.disabled = true;
                break;
            case 3:
                console.log(walls[i]);
                walls[i] ? w.disabled = false : w.disabled = true;
                break;
        }
    }
}