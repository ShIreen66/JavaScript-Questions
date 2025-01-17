// Write a program that calculates the sum of 5 + 10, assigns it to a variable, and logs the result to the console.

// // answer
// var a = 5 
// var b = 10

// console.log(a+b);


// Declare a variable age with the value 25. Then, reassign it to 30 and log its type using typeof.

// answer

//  var age = 25;
//  age=30

//  console.log(typeof age)

// Write a for loop that prints all the odd numbers between 1 and 20.

// answer

    // for (let i = 1; i < 21; i++) {
    //     // console.log(i);
    //     if (i%2 === 0){
    //         // console.log(i)
    //     }
    // }

// Create a while loop that starts at 10 and decreases by 2 until it reaches 0. Log each step.

// answer

// let i=10
// while (i>=0) {
//     // console.log(i)
//     i=i-2
// }

// Create an array of your favorite fruits (at least 5).

// answer
// var arr =["apple","mango","banana","lichi","grapes"]
    // console.log(arr)

//  •	Add a new fruit to the end of the array.

// answer
//         const arr = ["apple","mango","banana","lichi","grapes"]
//         arr.push("papaya")
//         console.log(arr)

//  •	Remove the first fruit from the array.
// answer

    //    let arr = ["apple","mango","banana","lichi","grapes"]
    //    arr.shift()
    //    console.log(arr)

// 	•	Log the updated array.
// answer
    // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // arr.push(11)
    // console.log(arr)

// 	6.	Write a program that iterates over an array of numbers and prints only the numbers greater than 10.
    //  var arr = [1, 2, 3, 4, 5,12, 6, 7, 8, 9, 10]
    //  for (let i = 0; i < arr.length; i++) {
    //     if(arr[i]>10){
    //         console.log(arr[i])
    //     }
        
    //  }

// 5.⁠ ⁠Functions
// 	7.	Write a function multiplyNumbers that takes two numbers as arguments and returns their product. Test the function with values 5 and 6.
// answer
    //  function number(a,b) {
    //     return a*b
 
    //  }
    //  console.log(number(5,6))

// 6.⁠ ⁠Conditionals
// 	8.	Write an if...else statement to check if a number is divisible by 3. If it is, log “Divisible by 3,” otherwise log “Not divisible by 3.”
// answer
//   var abc = 22
//   if(abc%3===0){
//     console.log("3 se divisible hai")
//   }
//   else{
//     console.log("3 se divisible nahi hai")
//   }

// 7.⁠ ⁠Object Basics
// 	9.	Create an object book with properties: title, author, and year. Add a new property genre with the value fiction and log the updated object.
// answer

// let book = {
//     title: "abc",
//     author: "def",
//     year: 2025,
// }

// book.genre = "fiction"
// console.log(book)

// 8.⁠ ⁠String Manipulation
// 	10.	Write a program that takes a string JavaScript is fun! and:
// 	•	Converts it to all uppercase.
// 	•	Extracts the first 10 characters.
// 	•	Replaces the word fun with awesome.

var str = "JavaScript is fun!"
console.log(str.toUpperCase())

console.log(str.slice(0,10))

console.log(str.replace("fun","awesome"))