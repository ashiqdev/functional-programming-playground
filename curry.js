// without currying
function add(a, b) {
  return a + b;
}

// with currying
function addWithCurry(a) {
  return function (b) {
    return a + b;
  };
}

// Curry + Arrow function
const addWithCurryArrow = (a) => (b) => a + b;

export { add, addWithCurry, addWithCurryArrow };
