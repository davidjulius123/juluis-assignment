// Spread with arrays
const arr = [1, 2, 3];
const newArr = [...arr, 4];
console.log(newArr); // [1, 2, 3, 4]

// Spread with objects
const obj = { name: "Alice", age: 25 };
const newObj = { ...obj, location: "USA" };
console.log(newObj); // { name: 'Alice', age: 25, location: 'USA' }
