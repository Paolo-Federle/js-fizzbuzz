// TODO: Write your function in this file

function fizzBuzz(lower, upper) {
    const fizzBuzzedArray = []
    for (i=lower; i <= upper; i++) {
        if (i%5 === 0 && i%3 ===0) {
            fizzBuzzedArray.push("FizzBuzz")
        }
        else if (i%5 === 0) {
            fizzBuzzedArray.push("Buzz")
        }
        else if (i%3 ===0) {
            fizzBuzzedArray.push("Fizz")
        }
        else {
            fizzBuzzedArray.push(i)
        }
    }
    return fizzBuzzedArray
}




function fizzBuzz(lower, upper) {
    const fizzBuzzedArray = []
    for (i=lower; i <= upper; i++) {
        let num = ""
        if (i%3 === 0) {
            num += "Fizz"
        }
        if (i%5 ===0) {
            num += "Buzz"
        }
        if (num.length === 0) {
            num = i
        }
        fizzBuzzedArray.push(num)
    }
    return fizzBuzzedArray
}


// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
