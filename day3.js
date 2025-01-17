// +++++++++++++++++++++++++++++++++++++++  1 ++++++++++++++++++++++++++++++++++++++++++++

// 1. basic console usage
// var a = 1;
// console.log(a)
// console.warn(a);
// console.error(a);

// 2. log the result of a mathematical operations (2+2)

// console.log(2+2);

// 3. Log a variable’s value and track changes using console.log().

    // var a = 2;

    // console.log(a);
    
    // a = math.random
    // console.log(a)

// +++++++++++++++++++++++++++++++++++++++  2 ++++++++++++++++++++++++++++++++++++++++++++

// 1. Declare a variable using let and const.
// const a = 5;
// console.log(a)
//     let = 2;
//     b=2
//     console.log(b)
    
// 2. Assign and reassign a value to a variable.

    // let a = 5;
    // let b = 3;

    // let res = (a+b)

    // console.log(res)

// 3. Determine the type of a variable using typeof.

    // let abc = "delhi"

    // console.log(typeof abc);

// +++++++++++++++++++++++++++++++++++++++  3 ++++++++++++++++++++++++++++++++++++++++++++

// 1. Create a for loop to print numbers from 1 to 10.

    // for (let i = 1; i < 11; i++) {
    //     console.log(i)
        
    // }

// 2. Create a while loop to count down from 10 to 1.

// let i = 10;
//     while (i>0) {
//         console.log(i)
//         i--
//     }

// 3. 
// let arr = [1,2,67,23,23]

// for (const element of arr) {
//     console.log(element)
// }

// +++++++++++++++++++++++++++++++++++++++  4 ++++++++++++++++++++++++++++++++++++++++++++

// 1. Create an array with 5 elements and log it.

// var arr = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < arr.length; i++) {
//     console.log(i)
    
// }


// 2. Use a for...of loop to iterate over an array of names.

var arr = [1, 2, 3, 4, 5, 6]

// for (const element of arr) {
    
//     console.log(element);
    
// }

// 3. Add a new element to the end of an array (.push()).

    arr.push(7) //New elements to add to the array.
    // console.log(arr);

// 4. Remove the last element from an array (.pop()).

    arr.pop() //Remove the last element from the array.
    // console.log(arr);

// 5. Iterate over an array and print each element.

    for (let i = 0; i < arr.length; i++) {
        // console.log(i);
    }

// 6. Find the length of an array.

    for (let i = 0; i < arr.length; i++) {
        // console.log(i)
    }

// 7. Create an array of arrays with 3 subarrays.

    var arr = [[1,2,3], [4,5,6], [7,8,9]]

    for (let i = 0; i < arr.length; i++) {
        // console.log(i)
    }

// +++++++++++++++++++++++++++++++++++++++  5  ++++++++++++++++++++++++++++++++++++++++++++

// 1. Create a function to add two numbers and return the result.

    function AddTwoNumbers(a, b) {
        return a+b;
    }

    // console.log(AddTwoNumbers(2, 3));
    
// 2. Write a function that accepts a string and returns its uppercase version.

    func = (string) => {
        return string.toUpperCase();
    }

    // console.log(func("hello"));

// . Create a function that takes an array as an argument and returns the element that is located at the 3rd index.

    function thirdIndex(arr) {
        return arr[3];
    }

    // console.log(thirdIndex([1,2,3,4,5,6,7,8,9]));

// . Create a function that takes in two numbers as arguments and returns their sum.

    function sum(a, b) {
        return a+b;
    }

    // console.log(sum (2, 3));

// 3. Create a function to calculate the area of a rectangle.

function AreaOfRectangle(l, w){
        return l*w;
    }

    // console.log(AreaOfRectangle(2, 3));

// +++++++++++++++++++++++++++++++++++++++  6  ++++++++++++++++++++++++++++++++++++++++++++

// 1. Write an if statement to check if a number is positive or negative.

    //  let a = 5;
    // if (a > 0) {
    //     console.log("positive");
    // }
    // else {
    //     console.log("negative");
    // }

// . Write a function to check if a number is less than 100.

    function lessThan100(a) {       
        if (a < 100) {
            return "less than 100";
        }
        else {
            return "greater than 100";
        }
    }

    // console.log(lessThan100(101));

// . Write a function that returns the length of a string. 

    function lengthOfString(string) {
        return string.length;
    }

    // console.log(lengthOfString("hello"));

// 2. Use if...else if to classify a grade as “A”, “B”, or “Fail”.

// let subject1 = prompt ("enter a 1 number");
// let subject2 = prompt ("enter a 2 number");
// let subject3 = prompt ("enter a 3 number");


// subject1 = Number(subject1);
// subject2 = Number(subject2);
// subject3 = Number(subject3);

// if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3)) {
//     console.log("abc")
// }
// else {
//     console.log(((subject1+subject2+subject3)/3).toFixed(2)+ "% ")
// }

// . Write a function that returns the day of the week. It takes a number as an argument (1-7) and returns the day of the week.

    function dayOfTheWeek(day) {
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        return days[day-1];
    }   

    // console.log(dayOfTheWeek(1));



    // 3.Create a switch case for selecting a fruit price.

    // let fruit = prompt("Enter a fruit name");
    // fruit = fruit.toLowerCase();

    // switch (fruit) {
    //     case "apple":
    //         console.log("Apple costs 100 Rs");
    //         break;
    //     case "banana":
    //         console.log("Banana costs 50 Rs");
    //         break;
    //     case "mango":
    //         console.log("Mango costs 150 Rs");
    //         break;
    //     case "grapes":
    //         console.log("Grapes costs 200 Rs");
    //         break;
    //     default:
    //         console.log("fruit not available");
    //         break;
    // }

// +++++++++++++++++++++++++++++++++++++++++++++++++  7  +++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. Create an object to store information about a car (e.g., make, model, year).

    // let car = {
    //     make: "Toyota",
    //     model: "Corolla",
    //     year: 2021
    // }

    // console.log(car);

// 2. Access and log the value of a property using dot notation.

    var car = {
        make: "Toyota",
        model: "Corolla",
        year: 2021
    }

    // console.log(car.make);

// . Access and log the value of a property using bracket notation.

    // console.log(car["model"]);


// . Add a new property to the object.

    car.color = "red";
    // console.log(car);

// . Use a method to add a new property to an object.

    car["price"] = 1000000;
    // console.log(car);

// 3.Add a new property to an existing object.

    car["price"] = 1000000;
    // console.log(car);

// . Use Object.keys() to log the name of each property in an object.

    // console.log(Object.keys(car));

// . Use a for...in loop to log all properties of the object.

    for (const key in car) {
        // console.log(key);
    }

// +++++++++++++++++++++++++++++++++++++++++++++++++  8  +++++++++++++++++++++++++++++++++++++++++++++++++++

// . Create a promise that resolves after 5 seconds.

    let promise = new Promise((resolve, reject) => {    
        setTimeout(() => {
            resolve("Promise resolved")
        }, 5000);
    });

    // promise.then((res) => {

// 1. Concatenate two strings.

    // let a = "hello";
    // let b = " world";

    // console.log(a+b);

// . Concatenate three strings.

    // let c = "hello";
    // let d = " world";
    // let e = " of javascript";

    // console.log(c+d+e);

// . Construct a sentence from an array of words.

    // let arr = ["hello", "world", "of", "javascript"];

    // console.log(arr.join(" "));

// 2. Extract the first 5 characters of a string (.slice()).

    // let string = "hello world";

    // console.log(string.slice(0, 5));

// . Extract the last 5 characters of a string.

    // console.log(string.slice(-5));

// Replace a word in a string using .replace().

    let string = "hello world";

    // console.log(string.replace("world", "javascript"));