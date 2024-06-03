//demonstrates the idea that closure creates
//new "instances" of returned functions (and their associated data)
//when the outer function that returns them is called

function outer() {
    let counter = 0
    function incrementCounter() {
        counter += 1
        console.log(`counter value: ${counter}`)
    }

    return incrementCounter
}

const myNewFunction = outer()
myNewFunction()
myNewFunction()
myNewFunction()

const anotherFunction = outer()
anotherFunction()
anotherFunction()
myNewFunction()
