"use strict";
{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    function sumArray(numbers) {
        const sum = numbers.reduce((num, currentNum) => num + currentNum, 0);
        return sum;
    }
    // take a look 
    const arrayOfNumbers = [12, 13, 14, 15, 16, 17, 18, 19];
    console.log(sumArray(arrayOfNumbers));
    ///
}
