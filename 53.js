function myLocalScope() {
  let myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

console.log("outside myLocalScope", myVar);
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);
