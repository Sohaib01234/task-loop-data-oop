// This will show a message in the browser's console
console.log('Hello from the JavaScript file!');


////////////////////////////////////
// 1- Reverse a String:
function reverseString(str) {
    const strReverse =  str.split('').reverse().join('');
    console.log(strReverse );
}

// Function call
reverseString("Helloo");
reverseString("Sohaib");


/////////////////////////////////////////////////
// 2-Find Factorial:
let n = 4;
function factorial(n) { 
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * factorial( n - 1 ); 
    } 
} 

console.log(factorial(n));


/////////////////////////////////////
// 3- Merge Objects

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }

  
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, d: 5 };

const merged = mergeObjects(obj1, obj2);
console.log(merged); // Output: { a: 1, b: 4, c: 3, d: 5 }


/////////////////////////////////////////
// 4- Toggle Boolean

function toggleBoolean(bool) {
    return !bool;
  }

  
console.log(toggleBoolean(true));  // Output: false
console.log(toggleBoolean(false)); // Output: true


/////////////////////////////


// 1. Create an array of numbers
const numbers = [12, 7, 5, 21, 18, 33, 8, 14,10];


// 2. Function to calculate the sum of all numbers in the array
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// 3. Function to find the maximum number in the array
function findMaximum(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// 4. Function to find the minimum number in the array
function findMinimum(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

// 5. Function to count even and odd numbers in the array
function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return {
        even: evenCount,
        odd: oddCount
    };
}

// 6. Function to generate a formatted report of the results
function generateReport(numbers) {
    const sum = calculateSum(numbers);
    const max = findMaximum(numbers);
    const min = findMinimum(numbers);
    const counts = countEvenOdd(numbers);
    
    return `
Array: ${JSON.stringify(numbers)}
Sum: ${sum}
Maximum: ${max}
Minimum: ${min}
Even Numbers: ${counts.even}
Odd Numbers: ${counts.odd}
    `;
}


// 7. Main program
const report = generateReport(numbers);
console.log(report);
///////////////////////////////////