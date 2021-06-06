//set initial count
let count = 0;

/*Now I want to select value span and button. For that I am going to use querySelectorAll to select the button with the
class 'btn'. 
*/

const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

/*
The querySelectorAll will display all the buttons in NodeList in form of array. If we want to get individual index in array
we will use JS method forEach(). The forEach() method calls a function once for each element in an array, in order.
the function is not executed for array elements without values.
the btns constant is an array. 
*/ 

btns.forEach((item)=> {
    item.addEventListener('click', (e)=> {
        //console.log(e.currentTarget); 
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.styles.color = "#222"
        }
        value.textContent = count;
    })
})

/*
Line # 19 => Here we created a forEach() method for the btns array and then get each item inside the array. 
Line # 20-21 =>Now we call addEventListener of click on each item followed by a function. When the user click on each button the element inside the array will be
fetched that caused that event to happen.
Line # 22 => In line 22 we will get the list of classes that is present inside the element that we clicked on. Next we assigned the value inside constant.
Line # 23-31 => Next we created an if else statement in which we check that if styles variable that we created has a class or name of "decrease" then decrease the count by 1;
Line # 32 => Now we are displaying the data saved in count to the DOM by targetting the value variable as it is connected to the span value.
*/ 
