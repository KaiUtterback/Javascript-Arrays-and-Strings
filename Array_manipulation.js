// Task 1: Adding and Removing Elements
let fruits = ['apple', 'banana', 'orange'];

// Adding an element to the end of the array using push
fruits.push('grape');
console.log('After push:', fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Removing the last element from the array using pop
let removedFruit = fruits.pop();
console.log('After pop:', fruits); // Output: ['apple', 'banana', 'orange']
console.log('Removed fruit:', removedFruit); // Output: 'grape'

// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];

// Sorting the array in ascending order using sort
numbers.sort((a, b) => a - b);
console.log('Sorted numbers:', numbers); // Output: [1, 2, 3, 4, 5]

// Task 3: Applying Array Methods
let moreNumbers = [3, 1, 5, 2, 4];

// Doubling each number in the array using map
let doubledNumbers = moreNumbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers); // Output: [6, 2, 10, 4, 8]

// Filtering out even numbers from the array using filter
let oddNumbers = moreNumbers.filter(num => num % 2 !== 0);
console.log('Odd numbers:', oddNumbers); // Output: [3, 1, 5]

// Calculating the sum of all numbers in the array using reduce
let sumOfNumbers = moreNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of numbers:', sumOfNumbers); // Output: 15

// Using the spread and rest operators
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Combining arrays using the spread operator
let combinedArray = [...array1, ...array2];
console.log('Combined array:', combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Using the rest operator in a function
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log('Sum using rest operator:', sum(1, 2, 3, 4, 5)); // Output: 15
