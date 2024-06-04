//callback exercises
// Challenge 6
function reduce(
    array: any[],
    callback: (accum: any, curr: any) => any,
    initialValue: any
) {
    let accum = initialValue

    for (let i = 0; i < array.length; i += 1) {
        accum = callback(accum, array[i])
    }

    return accum
}

// const nums = [4, 1, 3]
// const add = function (a: number, b: number) {
//     return a + b
// }
// console.log(reduce(nums, add, 0)) //-> 8

//challenge 7
/* Construct a function intersection that takes 
in an array of arrays, compares the inner arrays, 
and returns a new array with elements found in 
all of them. BONUS: Use reduce! */
/*
This challenge is giving me a lot of trouble,
so what can I do?
-try the problem again:
  -I spent time on the problem earlier so maybe coming back
  to it might work
-try a simpler related problem:
  -find the intersection of just two arrays
-walk through my current solution to see where it's going wrong
  -rubber-ducky
*/

function simpleIntersection(arr1: number[], arr2: number[]) {
    // create empty intersectionArray
    let intersectionArray: number[] = []
    //for each item in array 1
    arr1.forEach((num) => {
        // check if it's in array 2
        if (arr2.includes(num)) {
            // if so, push it to intersectionArray
            intersectionArray.push(num)
        }
    })

    //after looping through all items in array 1
    //make intersectionArray a set to remove
    //duplicates
    const deduped = new Set(intersectionArray)
    //then convert it to array and return the array

    return Array.from(deduped)
}

// console.log(simpleIntersection([5, 10, 15, 20], [15, 88, 1, 5, 7]))

function intersection(arrays: number[][]) {
    return reduce(arrays, simpleIntersection, [arrays[0]])
}

console.log(
    intersection([
        [5, 10, 15, 20],
        [15, 88, 1, 5, 7],
        [1, 10, 15, 5, 20],
    ])
)
// should log: [5, 15]
