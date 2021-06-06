// /*
// hex color consist of # and six values, the six values could be from anywhere within the array.
// We will create a loop that will generate hex color for us, the loop will run six times. 
// Next we will target the body and change the color of the body and the values within the color span
// */ 

// const hex = [0, 1,2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const btn = document.getElementById('btn');
// const color = document.querySelector('.color');

// btn.addEventListener("click", ()=> {
// let hexColor = "#" //for a typical hash number # is compulsory

// for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
// }
// color.textContent = hexColor;
// document.body.style.backgroundColor = hexColor;
// })

// let getRandomNumber =()=> {
//     return Math.floor(Math.random() * hex.length);
// }

// /*
// Now to get a random number of indexes of array we have created a function that genrate a random number just like we
// created in app.js and called the function inside the for loop. 
// */ 


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; 

const btn = document.getElementById("btn");
const color =document.querySelector('.color');

btn.addEventListener("click", ()=> {
    let hexColor ="#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

let getRandomNumber =()=> {
    return Math.floor(Math.random()* hex.length);
}


