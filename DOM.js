// 1.   Write a function to select a <div> with the ID container and log it to the console.
    // function selectContainer () {
    // const div = document.querySelector('#container') 
    //  console.log(div)   
    // }

    // selectContainer()

// 2.   Select all <li> elements inside a <ul> with the class menu and log them as an array.
    // const elements = document.querySelector('ul')
    // const elem = elements.querySelectorAll('li')
    // console.log(Array.from(elem))

// 3.	Write code to select the first <h1> element on a webpage and change its color to blue.
    // var h = document.querySelector("h1 ")
    // h.style.color="blue"

// 	4.	Select the element with the class card and add a border to it using JavaScript.
    // document.querySelector('.card').style.border="2px solid red"

//  5.   Write a function to log all elements with the tag name button to the console.
    // function name() {
    //    var btn = document.querySelectorAll("button")
    //    console.log(btn)
    // }

    // name()

//  6. 	Select a <p> element with the class description and change its text to "Updated description".
//    const elem = document.querySelector(".discription")
//     elem.innerHTML = "update description"

// 	7.	Write a function that takes an ID of an element and changes its text to "Hello, World!".
        // function elem() {
        //     const element = document.querySelector(".text")
        //     element.innerHTML = "Hello, World!"
        // }
        // elem()

//  8.	Select a button with the ID submit and set its text to "Submit Form".
        // const btn = document.querySelector(".submit")
        // btn.innerHTML = "Submit Form"

//  9.  Replace the text inside a <span> element with the class price to "₹499".
    // const elem = document.querySelector(".text")
    // elem.innerHTML =  "₹499"

// 	10.	Write a function to change the text of all <h2> elements on the page to "Welcome to My Page".
    // const text = document.querySelector(".elem")
    // text.innerHTML = "Welcome to My Page"
    // function elem() {
    //     const text = document.querySelectorAll("h2")
    //     text.forEach((text) => {
    //     text.innerHTML = "Welcome to My Page"
    // })
    // }

    // elem()

// 	11.	Select a <div> with the ID content and replace its inner HTML with a new <h2> and <p> element.
    // let ele = document.getElementById("content");
    // ele.innerHTML = "<h2> this is h2 </h2> <p> this is p tag </p>"

// 	12.	Write a function that takes an element ID and replaces its content with a <button>Click Me!</button>.
    function replace (){
        const content = document.querySelector("elem")
        content.innerHTML = "click here" 
    }

    replace()