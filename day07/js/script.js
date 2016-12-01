/*

(function(){
    var createTodoList = function(){


    var todo = [];
    todo.push( prompt('What is the first item on your todo list?'));
    for(var moreTodo = true; moreTodo;){
        if( confirm('Any more items?') ){
            addTodoItem(todo);
        }else{
            moreTodo = false;
            printTodoList(todo);
            }
        }
    }();

    function addTodoItem(todoArr){
        todoArr.push( prompt('What is the next todo item?') );
    }

    function printTodoList(todoArr){
        var msg = '';
        for(var i = 0; i < todoArr.length; i++){
            msg += '   - ' + todoArr[i] + '\n';
        }
        alert('My list of items to purchase: \n' + msg);
    }
}()); //iffy to get rid of global functions

*/

(function(){

var todo = [];
var item = prompt('Enter our first todo item.');

//console.log(item);

/*What we have to deny in our prompt

Esc === null
cancel === null
Enter === ''
okay === ''
spaces
numbers

OKAY:
spaces...item....spaces
*/

if ( isValid(item) ){
    addTodo(item);
    checkIfMore();
}

function isValid(item){
    if(item !== null){
        if( item.trim() !== '' && 
           !parseInt(item) ){
            console.log(item);
            return true;
        }else{
            alert('Invalid Input, try again.');
            return false;
        }
        
    }else{
        alert('Invalid Input, please try again.');
        return false;
        
    }    
}
function addTodo(item){
    todo.push(item);
}
function checkIfMore(){
    for(var moreTodo = true; moreTodo;){
        if( confirm('What to add more?' )){
            askMore();
        }else{
            moreTodo = false;
            craftMsg();
        }
    }
}
function askMore(){
    var item = prompt('Enter another to do item:')
    if ( isValid(item) ){
         addTodo(item);
    }
}

function craftMsg(){
    var msg = '';
    for(var i = 0; i < todo.length; i++){
        msg += '   - ' + todo[i] + '\n';
    }
    alert('My list to purchase: ' + msg);
}

}());
