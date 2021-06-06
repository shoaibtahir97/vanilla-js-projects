const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color"); 
/*
querySelector() method returns the first element that matches a specified CSS selector(s) class in the document. 
The querySelector() method only returns the first element that matches the specified selectors. 
To return all the matches, use the querySelectorAll() method instead.
If the selector matches an ID in document that is used several times (Note that an "id" should be unique 
within a page and should not be used more than once), it returns the first matching element.
*/

/*
addEventListner() method has two parameters one is an event handler like "click" or "mouseover" etc to the specified element
and second is a function that what you want to do when the user clicks on that button
In this case we have initialize a variable "btn" and get the button tag using getElementById() and linked it with 
addEventListner. When user clicks on the button the function will be executed.

*/
btn.addEventListener("click", ()=> { 
    //Here we are getting random number between 0 - 3
    const randomNumber = getRandomNumber(); //here we have call getRandomNumber function that is created below to get a random number which would get a random index element from the array
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]; 
    color.textContent = colors[randomNumber];
});

/*
the variable at line#25 targets the document body and changes the background color of the DOM 
by the colors present in the array and gives the randomNumber from which a random color is taken from the array and 
gets displayed on the DOM
*/

/*
Now in order to get a random number which would get random number form the array we created a function and inside of it
return the Math.random() method that will return a random number every time. Now if we run this function we will get a random 
number that is in decimal number and not in a whole number, so nothing will happen on the DOM as there is no index with the decimal number
To solve this problem we are going to muliply the random number with the length of array to get the value in whole numbers and then use
Math.floor() function to round of the number to a single digit 
*/ 
let getRandomNumber = () => {
    return Math.floor(Math.random()* colors.length);
}