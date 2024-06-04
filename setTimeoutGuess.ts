//define printHello and assign function defintion to it
//in the global execution context
// function printHello() {
//     console.log("Hello")
// }

//call global function setTimeout
//this creates a new execution context
//assign the printHello function to the callback
//parameter, to the delay parameter assign
//1000
//once the execution starts, I'm not sure what it's
//doing since I don't have the definition of it
//I would guess it would be something like
//decrement delay by 1, check if delay now equals
//0 and call the passed in callback,
//otherwise, wait 1 millisecond and loop back around
//however,
//my experiment in asynchronicity.ts suggests that
//might not be the case since setting the delay to 0
//doesn't cause the callback to be called immediately
// setTimeout(printHello, 1000)

//call the global function console.log
//assign the string literal to the message
//parameter
// console.log("Me first!")

//WHAT'S ACTUALLY HAPPENING-------------------------------------

//define printHello and assign function defintion to it
//in the global execution context
function printHello() {
    console.log("Hello")
}

//call web api function setTimeout
//pass callback function and delay to it
//the browser takes care of the implementation
//and timing of this
setTimeout(printHello, 1000)

//call the global function console.log
//assign the string literal to the message
//parameter
console.log("Me first!")
