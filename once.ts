//higher order function that accepts a callback and
// returns a function that will only allow you to
//use the callback function once
function once(callback: Function) {
    let counter = 0

    function myFunc() {
        if (counter < 1) {
            callback()
            counter += 1
        } else {
            console.log("sorry, you can only run this function once")
        }
    }

    return myFunc
}

function helloMe() {
    console.log("Hi, Jordan!")
}

const myOnceFunc = once(helloMe)
myOnceFunc()
myOnceFunc()
myOnceFunc()
