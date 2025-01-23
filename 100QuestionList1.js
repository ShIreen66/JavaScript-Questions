// Here is a collection of 100 JavaScript questions, divided into groups of 10, based on topics 1-8, with increasing complexity.

// 1. Basic Console Usage (10 Questions)
// 	1.	Log your name and favorite hobby to the console.

// answer
    // console.log("my name is shireen and my favorite hobby is listening to music")


// 	2.	Perform and log the result of 45 * 2 - 10.

// answer
    // console.log(45 * 2 - 10)


// 	3.	Use console.log() to display the current year.

// answer
// console.log(2025)


// 	4.	Create two variables for first and last name. Concatenate and log them.
// answer
    // var firstname = "Shireen"
    // var lastname = "Khan"
    // console.log(firstname+" "+lastname)

// 	5.	Track the value of a variable by logging it before and after updating.
// answr
// var a = 10
// console.log(a)
// a= Math.random()
// console.log(a)

// 	6.	Use console.error() to simulate an error message.

// answer
    // console.error("this is an error message")

// 	7.	Log the square of the number 12 to the console.
// answer
// console.log(12*12);

// 	8.	Print the type of a variable holding the value true.
// answer
// var a = true
// console.log(typeof true)

// console.log(typeof true)

// 	9.	Create a variable holding your age and log whether it’s greater than 18.
// answer
// let age = 21
// console.log(age < 18);
    // if (age < 18){
    //     console.log("you are under 18")
        
    // }
    // else{
    //     console.log("you are above 18")
    // }

// 	10.	Log the result of 100 / 0 and observe the output.
// answer

// console.log(100/0)

// 2. Variables and Data Types (10 Questions)

// 	11.	Declare a variable using let and log its value.
// answer
// let a =10
// console.log(a)

// 	12.	Create a constant to store the value of PI and log it.
// answer
// const PI = 22/7;
// console.log(PI)

// 	13.	Reassign a value to a variable declared with let and log the result.
// answer
// var a= 10
// a=20
// console.log(a);

// 	14.	Check the type of null and log it.
// answer
// console.log(typeof null)

// 	15.	Create a variable with a number as a string (e.g., "25") and log its type.
// answer
// let a="25"
// console.log(typeof a)

// 	16.	Use typeof to check the type of a boolean variable.
// answer
// var abc = true
// console.log(typeof abc)

// 	17.	Create three variables of types string, number, and boolean, and log their values.
// answer
// let a = "hello"
// let b = 10
// let c = true
// console.log(a,b,c)

// 	18.	Declare a variable without assigning a value. Log its type.
// answer
// let a;
// console.log(typeof a)

// 	19.	Create a variable with undefined and log its type.
// answer
// var abc = undefined
// console.log(typeof abc)

// 	20.	Use const to create an array. Try reassigning the array and observe the error.
// answer
// const arr = [1,2,3,4]

// arr = [1,2,3,4,5]
// console.log(arr)

// 3. Loops (10 Questions)
// 	21.	Write a for loop to print numbers from 1 to 50.
// answer
// for (let i = 1; i < 50; i++){
//     console.log(i)
// }

// 	22.	Use a while loop to sum the numbers from 1 to 10.
// answer
    
    // let sum = 0
    // let i = 1
    // while (i<=10) {
    //     sum=sum+i
    //     i++
    // }
    // console.log(sum)

// 	23.	Create a for...of loop to log each character of the string "JavaScript".
// answer

// let str = "JavaScript"
// for (let char of str){
//     console.log(char)
// }

// 	24.	Write a for loop that skips even numbers between 1 and 20.
// answer

// for (let i = 1; i < 21; i++) {
//     // console.log(i)
//     if (i % 2 === 0) {
//         continue
//     }
//     console.log(i)
// }

// for (let i = 1; i <= 20; i+=2) {
//     console.log(i);
    
// }

// 	25.	Use a do...while loop to log numbers from 5 to 1.
// answer
// var i =5
// do{
//     console.log(i)
//     i--
// }
// while(i>=1)

// 	26.	Create a for loop that calculates the factorial of 5.
// answer
// let factorial = 1
// for (let i = 1; i <= 5; i++) {
//     factorial *= i
// }
// console.log(factorial)

// let factorial = 1
// for (let i = 1; i <=3; i++) {
//     factorial *= i
// }
// console.log(factorial)

// 	27.	Write a nested loop to print a 3x3 grid of numbers.
// answer
// for (let i = 1; i <= 3; i++) {
//     let row = ""
//     for (let j = 1; j <= 3; j++) {
//         row += j + " "
//     }
//     console.log(row)
// }

// 	28.	Use a for loop to reverse an array [1, 2, 3, 4].
// answer
// let arr = [1, 2, 3, 4]
// let reversed = []
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i])
// }
// console.log(reversed)

// 	29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
// answer
// let i = 1
// while (i <= 100) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
//     i++
// }

// 	30.	Use a for...in loop to iterate over an object and log its keys.
// answer
// let obj = { a: 1, b: 2, c: 3 }
// for (let key in obj) {
//     console.log(key)
// }

// 4. Arrays (10 Questions)
// 	31.	Create an array of your top 5 favorite movies and log it.
// answer
// var arr = ["Housefull 1", "Housefull 2", "Housefull 3", "Housefull 4", "Housefull 5"]
// console.log(arr)

// 	32.	Find and log the second element of an array.
// answer
// var arr = ["Housefull 1", "Housefull 2", "Housefull 3", "Housefull 4", "Housefull 5"]
// console.log(arr[1]);

// 	33.	Add two new elements to the start of an array using .unshift().
// answer
// var arr = ["Housefull 1", "Housefull 2", "Housefull 3", "Housefull 4", "Housefull 5"]
// arr.unshift("singham", "singham 2")
// console.log(arr)

// 	34.	Remove the last element of an array and log the updated array.
// answer
// var arr = ["Housefull 1", "Housefull 2", "Housefull 3", "Housefull 4", "Housefull 5"]
// arr.pop()
// console.log(arr)

// 	35.	Use .slice() to extract the first three elements of an array.
// answer
// var arr = ["Housefull 1", "Housefull 2", "Housefull 3", "Housefull 4", "Housefull 5"]
// var extract = arr.slice(0,3)
// console.log(extract)
 
// 	36.	Find the index of a specific element in an array using .indexOf().
// answer
// var arr = ["Housefull 1", "Housefull 2", "Housefull 3", "Housefull 4", "Housefull 5"]
// var index = arr.indexOf("Housefull 3")
// console.log(index);

// 	37.	Check if a value exists in an array using .includes().
// answer
// var arr = ["Housefull 1", "Housefull 2", "Housefull 3", "Housefull 4", "Housefull 5"]
// var incldes = arr.includes("Housefull 3")
// console.log(incldes);

// 	38.	Combine two arrays [1, 2] and [3, 4] using .concat().
// var arr1 = ["Housefull 1", "Housefull 2", "Housefull 3"]
// var arr2 = [ "Housefull 4", "Housefull 5"]
// var concat=arr1.concat(arr2)
// console.log(concat)

// 	39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
// let arr = [5, 2, 9, 1]
// arr.sort()
// console.log(arr)

// 	40.	Write a program that creates a copy of an array without mutating the original.
// answer
// let arr = [1, 2, 3, 4]
// let copy=arr.slice()
// console.log(copy)

// 5. Functions (10 Questions)
// 	41.	Write a function to check if a number is even or odd.
//answer
// function evennumber(num){
//     if(num%2==0){
//         console.log("evennumber")
//     }
//     else{
//         console.log("odd");
//     }
// }
// evennumber(7)

// 	42.	Create a function to calculate the area of a circle with a given radius.
// answer
    // function area(radius) {
    //     return Math.PI*radius*radius
        
    // }
    // area(2)
    // console.log(area(2))

// 	43.	Write a function that accepts an array and returns the sum of its elements.
//answer
// function abc(arr) {
//     var sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         sum = sum +arr[i]

//     }
//     return sum
// }
// var array = [1, 2, 3, 4, 5]
// var result= abc(array)
// console.log(result)

// 	44.	Create a function that checks if a string starts with a specific character.
//answer
        // function name(string, character) {
        //     if (string.charAt(0)==character) {
        //         return true
        //     }
        //     return false
        // }

        // console.log(name("string", "a"))

// 	45.	Write a function to find the maximum of two numbers.
// answer
    // function maximum(a, b) {
    // if (a>b) {
    //    return a 
    // }
    // else (a<b)
    // return b
    // }

    // console.log(maximum(1,2))

// 	46.	Create a function that takes a number and returns its factorial.
// answer
// function factorial(num) {
//     if(num<0){
//     return "factorial does not exiat"
// }
//     let result=1
//     for (let i = 1; i <= num; i++) {
//         result *= i
        
//     }
//     return result
// }

// console.log(factorial(5))

// 	47.	Write a function that accepts a string and returns its reverse.
// answer   
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello"));

    // function reverseString(str) {
    //     let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i]
        
    // }
    //     return reversed;
    // }

    // console.log(reverseString("hello"))

// 	48.	Create a function to find the largest number in an array.
// answer

// function largestNumber(arr) {
//     let largestArray = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largestArray) {
//             largestArray= arr[i]
//         }
        
//     }
//     return largestArray
// }
//  console.log(largestNumber([5, 56, 3, 35]));
  
// 	49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").
// answer
    // function kababCase(str) {
    //     return str
    //     .toLowerCase()
    // }
    // console.log(kababCase("Hello World"))

// 	50.	Create a function that logs "Hello, World!" every time it is called.
    // function hello() {
    //     console.log("Hello, World!")
    // }
    // hello();
    // hello();
    // hello();
    // hello();

// 6. Conditionals (10 Questions)
// 	51.	Write a program to check if a number is positive, negative, or zero.
    
// function checkNumber(num) {
//     if (num > 0 ) {
//         return(num + " is positive")
//     }
//     else if (num < 0 ) {
//         return(num + " is negative")
//     }
//     else {
//         return(num + " is zero")
//     }
// }
// let result = checkNumber(12)
// console.log(result)

// 	52.	Create a program to check if a year is a leap year.

    // Function to check if a year is a leap year
// function isLeapYear(year) {
//     if (isNaN(year) || year <= 0) {
//       return "Please enter a valid year.";
//     }
//     if (year % 4 === 0) {
//       if (year % 100 === 0) {
//         if (year % 400 === 0) {
//           return year + " is a leap year.";
//         } else {
//           return year + " is not a leap year.";
//         }
//       } else {
//         return year + " is a leap year.";
//       }
//     } else {
//       return year + " is not a leap year.";
//     }
//   }
  
//   const year = parseInt(prompt("Enter a year:")); 
//   const result = isLeapYear(year); 
//   console.log(result); 
  

// 	53.	Write an if...else statement to determine if a person can vote based on their age.
    // function vote(age) {
    //     if (age >= 18) {
    //         return "can vote"
    //     } else 
    //     return "can't vote"
    // }

    // console.log(vote(15))

// 	54.	Use a switch statement to log the name of the day based on its number (1 = Monday).
    // let day = 1

    // switch (day) {
    //     case 1:
    //         console.log("monday")
    //         break;
    //         case 2:
    //         console.log("tuesday")
    //     default:
    //         console.log("invailid day number")
    // }

// 	55.	Write a program to check if a number is divisible by 3 and 5.
    // let number = prompt ("enter a number")
    // number = parseInt(number);

    // if (number % 3 === 0 && number % 5 === 0 ) {
    //     console.log("number is divisible by 3 and 5 ")
    // } else {
    //     console.log("number is not divisible by 3 and 5")
    // }

// 	56.	Create a program to check the grade of a student based on marks.
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
//     console.log(((subject1+subject2+subject3)/3).toFixed(2))
// }

// 	57.	Write an if condition to compare two strings and log if they are equal.
    // let str1 = "hello"
    // let str2 = "hello"

    // if (str1 === str2) {
    //     console.log("string is equal")
    // } else {
    //     console.log("string is not equal")
    // }

// 	58.	Use a ternary operator to check if a number is even or odd.

    // let number = 7 
    // let result = (number%2 === 0 ) ? "number is even" : "number is odd"
    // console.log(result)

// 	59.	Write a program to find the largest of three numbers using if...else.
// let num1 = parseFloat(prompt("Pehla number "));
// let num2 = parseFloat(prompt("Doosra number "));
// let num3 = parseFloat(prompt("Teesra number "));

// let largest;

// if (num1 >= num2 && num1 >= num3) {
//     largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// } else {
//     largest = num3;
// }

// console.log("Sabse bada number hai " + largest);

// // 	60.	Create a program to calculate the discount based on the price of an item.

//     var itemPrice = 1000;
//     var sellingPrice = 700;

//         var finalDiscount = ((itemPrice-sellingPrice)/itemPrice) *100

//         if (finalDiscount > 10%) {
//             console.log("10% discount provided")
//          } else {
//             console.log("10% discount nahi diya hai")
//          }


// 7. Object Basics (10 Questions)
// 	61.	Create an object with properties name, age, and city. Log the object.

//    const person = {
//     name : "shireen",
//     age : 21,
//     city : "Bhopal"
//    }

//    console.log(person)

// 	62.	Add a new property isStudent to the object above and set it to true.

    // const person = {
    //     name : "shireen",
    //     skills: "Mern Stack "
    // }

    //     person.isStudent = true
    //     console.log(person)

// 	63.	Access and log the value of the city property using bracket notation.

// const person = {
//         name : "shireen",
//         age : 21,
//         city : "Bhopal"
//        }
    
//        console.log(person["city"])
    
// 	64.	Delete the age property from an object and log the updated object.

    // const person = {
    //         name : "shireen",
    //         age : 21,
    //         city : "Bhopal"
    //        }

    // delete person.age ;

    // console.log(person)

// 	65.	Write a function that accepts an object and logs all its keys.

    // function logs(object) {
    //     for (const key of object) {
    //         console.log(key)
    //     }
    // }

    // const result = { name: "shireen",
    //                 age: 21,
    //  }

    //  console.log(result)

// 	66.	Create an array of objects representing books with title and author properties.

    // const books = [
    //     {
    //         title: "kuchh bhi",
    //         author: "abc",
    //     }

    // ]

    // console.log(books)

// 	67.	Access and log the author of the second book in the array.

    // const books = [
    //     {
    //         title: "kuchh bhi",
    //         author: "abc",
    //     },

    //     {
    //         title: "kuchh or bhi",
    //         author: "def",
    //     }
    // ]

    // console.log(books[1].author)


// 	68.	Write a program to check if a specific key exists in an object.

    // var person = {
    //     name: "kuchh bhi",
    //     age: 10,
    // }

    // console.log(Object.keys(person))

// 	69.	Create a function to count the number of keys in an object.
    
    // function countKeys(obj) {
    //     let count = 0
    //     for (let i = 0; i < Object.keys(obj).length; i++) {
    //         count++
            
    //     }
    //     return count
    // }

    // const result = {name: "john", age: 21}

    // console.log(countKeys(result))

// 	70.	Use Object.assign() to merge two objects.

        // const obj1 = {name: "John", age:21}
        // const obj2 = {city: "Bhopal", hobby: "Playing cricket"}

        // const mergeTwoObject = Object.assign({}, obj1, obj2)

        // console.log(mergeTwoObject)

// 8. String Manipulation (10 Questions)
// 	71.	Create a string and log its length.

// var str = "javascript"
// console.log(str.length)

// 	72.	Extract the last 4 characters of a string.
    // const string = "JavaScript"
    // const extract = string.substring(string.length -4)
    // console.log(extract)

// 	73.	Convert a string to lowercase and log it.
    // const str = "JAVASCRIPT"
    // const convert = str.toLocaleLowerCase()
    // console.log(convert)
    
// 	74.	Split a sentence into words using .split() and log the result.
    // let str = "I love JavaScript"
    // let arr = str.split(" ")
    // console.log(arr[1])

// 	75.	Find the position of the first occurrence of "a" in a string.
    // let string = "I love JavaScript"
    // let occurrence = string.indexOf("a")
    // console.log(occurrence)

// // 	76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".
//     let str = "I love JavaScript"
//     let replace = str.replace("JavaScript", "JS")
//     console.log(replace)

// 	77.	Repeat a string 3 times using .repeat().
//  let str = "JavaScript"
//  let result = str.repeat(3)
//  console.log(result)

// 	78.	Create a function that checks if a string contains a specific word.
    // let str = "I love JavaScript"
    //     function checkString(word) {
         
    //         return str.includes(word)
    //     }

    //     console.log(checkString("I"))

// 	79.	Write a program to remove whitespace from both ends of a string.
    // let str = "               I        love JavaScript            "
    // let result = str.trim()
    // console.log(result)

// 	80.	Create a function to count the number of vowels in a string.
    // var str = prompt("Please enter a word")
    // const reg = /[aeiou]/gi
    // var chars = str.match(reg)
    // if (chars) {    
    //     console.log(chars.join(' ,'))
    //     console.log(chars.length)
    // } else {
    //     console.log("no vowels found")
    // }

// Mixed Practice (20 Questions)
// 	81.	Write a function that accepts an array of numbers and returns only the even numbers.

// function evenNumber(arr) {
//     let evens = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evens.push(arr[i]);
//         }
//     }
//     return evens;
// }

// var array = [12, 23, 45, 78, 89, 90, 102];
// console.log(evenNumber(array));

//     console.log(evenNumber(array))

// 	82.	Create a program to count the occurrences of a specific value in an array.

    // var array = [2, 12, 22, 2, 2, 2, 78, 98, 90, 90]
    // var value = 2

    // function occurrences(arr, value) {
    //     let count = 0 
    //     for (let i = 0; i < arr.length; i++) {
    //         if (value === arr[i]) {
    //             count++
    //         }
            
    //     }
    //     return count
    // }

    // console.log(occurrences(array, value))

// 	83.	Write a function that accepts a string and returns whether it’s a palindrome.

    // let str1 = "hello"
    // let str2 = "noon"

    // function checkPalindrome(str) {
    //     if(str === str.split("").reverse().join("")) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    // console.log(checkPalindrome(str1))


// 	84.	Create a program to log a pattern:

// *
// **
// ***
// ****

    // for (let i = 0; i < 4; i++) {
    //     let row = " "
    //     for (let j = 0; j <= i; j++) {
    //        row += "*"
            
    //     }
    //     console.log(row)
    // }


// 	85.	Write a function that returns the square of each number in an array.
    // var arr = [2, 3, 4, 5]
    // function squareArray(number) {
    //     return number.map (num => num * num)
    // }
    // var squarenumber = squareArray(arr)
    // console.log(squarenumber)

// 	86.	Use a for loop to sum all odd numbers between 1 and 50.
    // let sum = 0
    // for (let i = 1; i < 51; i++) {
    //     // console.log(i)
    //     if (i%2 === 0 ) {
    //         sum += i
    //     }
        
    // }

    // console.log(sum)

// // 	87.	Create an object representing a person and log their full name.
//     var person = {
//         name:"john",

//     }

//     console.log(person)

// 	88.	Write a program to convert the string "10" to a number and add 5 to it.
    // let str = "10"
    // let number = Number (str) +5
    // console.log(number)

// 	89.	Write a program to reverse an array without using .reverse().
    // var i = 4
    // while (i>5) {
    //     i++
    // }

    // console.log(i)

// 	90.	Create a program to check if an array is empty.
// function empty (arr) {
//     return arr.length === 0
// }

// const array = []
// if (empty(array)) {
//         console.log("array is empty")
// } else {
//     console.log("array is not empty")
// }

// 	91.	Write a program to fetch the current date and format it as DD/MM/YYYY.
    // const today = new Date ()
    // const day = String(today.getDate()).padStart(2, '0')
    // const month = String(today.getMonth()+1).padStart(2, '0')
    // const year = today.getFullYear();

    // const formattedDate = `${day}/${month}/${year}`

    // console.log(formattedDate)

// 	92.	Write a program to find the smallest number in an array.
    // const number = [12, 90, 78, 67, 56, 45, 34, 23]
    // const smallestNumber = Math.min(...number)

    // console.log(smallestNumber)

// 	93.	Create a function to return the Fibonacci sequence up to n terms.
// The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers before it. The sequence starts with 0 and 1, and then each number is the sum of the two numbers before it. 
// The Fibonacci sequence is a series of integers, or Fibonacci numbers. 
// The sequence can continue forever. 

    // function fibonacci(n) {
    //     const sequence = [0, 1] // do no. se start kiya
    //     if (n <= 2) {
    //         return sequence.slice(0, n)
    //     } 
    //     while (sequence.length < n) {
    //         const nextTerm = sequence[sequence.length-1] + sequence[sequence.length-2]
    //         sequence.push(nextTerm)
    //     }
    //     return sequence;
    // }

    // console.log(fibonacci(10))

// 	94.	Use a try...catch block to handle division by zero.
    // function divide (a,b) {
    //     try {
    //         if(b === 0) {
    //             throw new Error("Division by zero!")
    //         } 
    //         return a/b
    //     } catch (error) {
    //         console.log("error", error.message)
    //     }
    // }

    // console.log(divide(10, 2))

// 	95.	Write a program to find the index of the first vowel in a string.
    // function firstVowel (str) {
    //     const index = str.search(/[aeiou]/i)
    //     return index;
    // }

    // const inputString = "JavaScript"
    // const result = firstVowel(inputString)
    // // console.log(result)
    // console.log(`the first vowel in "${inputString}" is at index`, result)

// 	96.	Create a function that accepts an array and returns only unique values.
    // const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 9, 6, 1, 1, 1, 1, 1, 1, 1]
    // function uniqueValues(arr) {
    //     const uniqueSet = new Set(arr)

    //     return [...uniqueSet]
    // }

    // const result = uniqueValues(inputArray)

    // console.log(result)

// 	97.	Write a program to merge two sorted arrays into one sorted array.
    // const arr1 = [1, 3, 5, 7]
    // const arr2 = [2, 4, 6, 8]
    // function mergeArray (arr1, arr2){
    //     return arr1.concat(arr2).sort((a,b) => a-b)
    // }

    // const result = mergeArray(arr1, arr2)
    // console.log(result)

// 	98.	Create a function to count the number of words in a string.
    // function countWords(str){
    //     if (!str.trim()) {
    //         return 0
    //     }

    //     return str.trim().split("").length
    // }

    // inputString = "I Love JavaScript"
    // console.log(countWords(inputString))

// 	99.	Write a program to toggle a button’s background color when clicked.
    //  const btn = document.querySelector(".toggleButton")

    //  btn.addEventListener("click", () => {
    //     const color = getComputedStyle(btn).backgroundColor
    //     if(color === "purple") {
    //         btn.style.backgroundColor = "green"
    //     } else {
    //         btn.style.backgroundColor = "blue"
    //     }
    //  })  

// 	100. Write a function to check if all elements in an array are greater than a specific value.
//     const num = [20, 30, 40, 50, 60]   
//     const specificNumber = 4
// function arrayElement(arr, value) {
//         return arr.every(element => element > value)
//     }

//     console.log(arrayElement(num, specificNumber))

// These questions cover a wide range of fundamental JavaScript concepts. Let me know if you’d like further clarification or solutions for any of these!