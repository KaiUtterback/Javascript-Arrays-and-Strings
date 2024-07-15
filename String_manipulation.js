// Task 1: Obtaining String Length
let message = "Hello, World!";
// Using the length property to obtain the length of the string
let messageLength = message.length;
console.log('Length of message:', messageLength); // Output: 13

// Task 2: Converting Cases
let text = "Hello, World!";
// Converting the string to uppercase
let upperCaseText = text.toUpperCase();
console.log('Uppercase text:', upperCaseText); // Output: 'HELLO, WORLD!'
// Converting the string to lowercase
let lowerCaseText = text.toLowerCase();
console.log('Lowercase text:', lowerCaseText); // Output: 'hello, world!'

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";
// Extracting a substring from the original string
let substring = sentence.substring(4, 9);
console.log('Extracted substring:', substring); // Output: 'quick'

// Task 4: Splitting Strings
let phrase = "The quick brown fox";
// Splitting the string into an array of words based on the space delimiter
let wordsArray = phrase.split(' ');
console.log('Array of words:', wordsArray); // Output: ['The', 'quick', 'brown', 'fox']

// Additional examples to further illustrate the concepts

// Example: Extracting the last word from a sentence
let lastWord = sentence.substring(sentence.lastIndexOf(" ") + 1);
console.log('Last word in sentence:', lastWord); // Output: 'dog'

// Example: Converting a sentence to an array of characters
let charArray = sentence.split('');
console.log('Array of characters:', charArray); 
// Output: ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 's', ' ', 'o', 'v', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'l', 'a', 'z', 'y', ' ', 'd', 'o', 'g']
