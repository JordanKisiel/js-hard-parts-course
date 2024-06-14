function* createFlow() {
    yield 4
    yield 5
    yield 6
}

const returnNextElement = createFlow()
const element1 = returnNextElement.next() //should be 4?
const element2 = returnNextElement.next() //should be 5?
const element3 = returnNextElement.next() //should be 6?
const element4 = returnNextElement.next() //should be undefined?

console.log(element1) //returns object with value and done properties
console.log(element2) //returns object with value and done properties
console.log(element3) //returns object with value and done properties
console.log(element4) //returns object with value of undefined and done of true

//observations:
// -the objects that generators return don't have a done property with value true until
//  they've exhausted their yields
// -expressing data as a generator function could potentially save a lot of space
//  if you could compress a large data set
