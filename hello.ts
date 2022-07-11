let a: string = "ss";
let b = 1;

// assign a value only if current value is truthy

a &&= "default"; // a is still undefined
b &&= 5; // b is now 5

console.log(a, b);
