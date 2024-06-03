//test whether using setTimeout with 0 second delay
//executes in order suggesting no delay

setTimeout(() => {
    console.log("time out 1 done")
}, 1000)

console.log("first log")

setTimeout(() => {
    console.log("time out 2 done")
}, 0)

for (let i = 0; i < 10000; i += 1) {
    console.log(`${i}th iteration`)
}

//resulting order:
//first log
//all loop iterations
//time out 2 done
//time out 1 done

//this suggests that setTimeout callback is automatically
//given lower priority compared to the following synchronous code
//no matter how show the delay is (even 0)
