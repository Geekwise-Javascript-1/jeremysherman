/* Thanksgiving assignment */
var listArr = [];
var toDo = confirm('Would you like to make a thanksgiving grocery list?');

if(toDo == true){
var loop = function(toDo){
    var loops = true;
    while(loops === true){
        var food = prompt('Enter thanksgiving item to pickup');
        listArr.push(food);
        var loops = confirm('Thanksgiving Ingredient Added. Add another?');   
    };

    console.log(listArr);
    
}();
alert('Turkey Day Shopping list: ' + '\n' + listArr.join('\n'));

}else {
    alert('Fridge is stocked and turkeys in the oven. \nEnjoy your time with your family.');
};





// create a to do list that accepts in a prompt and creates an array of those items then prints out as an alert. 

// capture user input
// create an array (// keep close eye on day 06 work)
// do you want to add more?
// no? alert all items
// yes? add to array

// edge casing
// handle escape
// cancel
// okay
// enter
// numbers
// blank
// spaces
// try to build it using functions to repeat actions!!


//list of items to purchase
//-milk
//-bread 
//-etc


//var userAnswer = prompt( 'Hi User, please input your first to do item' );
//var userIce = prompt('Do you like icecream?');
//if( userAnswer == 'male' && userIce =='yes'){
//    alert('You are male and you like ice cream');
//}
//else if( userAnswer == 'female' && userIce =='yes'){
//    alert('You are female and you like ice cream');
//}
//else if( userAnswer == 'male' && userIce =='no'){
//    alert('You are male and you dont ice cream');
//}
//else if( userAnswer == 'female' && userIce =='no'){
//    alert('You are female and you dont ice cream');
//}

//var arr = [];                               // define our array

//for (var i = 0; i < 10; i++) {              // loop 10 times
//  arr.push(prompt('Hello User, Enter To Do Item '); // push the value into the array
//}

//while (arr.length < 0){
//    userList = prompt('Hello User, Enter To Do Item ');
//}

//alert('Full array: ' + arr.join(', '));     // alert the results

//var list = [];
//
//while( confirm("Would you like to create a shopping list?")){ 
//    list.push( prompt("Please input a new item:") );
//};
//
//alert(list);

//var list = [];
//var item = true;
//
//while(item == true){
//    
//    list.push( prompt("Please input a food item:") );
//
//
//
//};
//console.log(list);
//    
//alert('Your Shopping List:' + list);  














//var listArr = [];
//var toDo = confirm('Would you like to make a thanksgiving grocery list?');
//
//
//var loop = function(toDo){
//    var loops = true;
//    while(loops === true){
//        var food = prompt('Enter thanksgiving item to pickup');
//        listArr.push(food);
//        confirm('Thanksgiving Ingredient Added. Add another?')
//        console.log(listArr)
//        loops++;
//    }
//    
//}();
//alert('To do list: ' + listArr + ' ');



/* Thanksgiving assignment
var listArr = [];
var toDo = confirm('Would you like to make a thanksgiving grocery list?');

if(toDo == true){
var loop = function(toDo){
    var loops = true;
    while(loops === true){
        var food = prompt('Enter thanksgiving item to pickup');
        listArr.push(food);
        var loops = confirm('Thanksgiving Ingredient Added. Add another?');   
    };

    console.log(listArr);
    
}();
alert('Turkey Day Shopping list: ' + '\n' + listArr.join('\n'));

}else {
    alert('Fridge is stocked and turkeys in the oven. Enjoy your time with your family.');
};
*/








