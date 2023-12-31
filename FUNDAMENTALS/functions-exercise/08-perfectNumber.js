// Write a function that receives a number and checks if that number is perfect or NOT.

// A perfect number is a positive integer that is equal to the sum of its proper positive
//  divisors. That is the sum of its positive divisors excluding the number itself (also known as 
//     its aliquot sum).
function perfectNumber(num) {

    let sumDivisors = 0;

    for (let divisor = 1; divisor < num; divisor++) {

        if (num % divisor == 0) {
            sumDivisors += divisor
        }
    }
    if (sumDivisors == num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(1236498)