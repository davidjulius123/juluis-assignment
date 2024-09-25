// Exporting functions
export function add(a, b) {
    return a + b;
  }
  
  export function multiply(a, b) {
    return a * b;
  }
// Importing functions from math.js
import { add, multiply } from './math.js';

console.log(add(2, 3));      // Output: 5
console.log(multiply(4, 5)); // Output: 20
  