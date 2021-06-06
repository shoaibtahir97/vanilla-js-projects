/*the forEach() method calls a function(callback function) once for each element in an array. If an array is empty then
the function will not be declared
*/

//multiply each item with 10 
let numbers = [67, 43, 22, 5];
numbers.forEach(multiply);

let multiply = (item, index, arr) => {
    arr[index] = item * 10;
}

//Sum all the items inside the array
let sum = 0;
let num = [1, 2, 3, 4, 5, 6, 7];

num.forEach(solve);

let solve = (item)=> {
    sum += item;    
}