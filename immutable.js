const person = {
  name: 'John',
  address: {
    country: 'USA',
    city: 'SF',
  },
};

// make a copy of the person object and add a new property on it [shallow copy]
const updated = {
  ...person,
  address: { ...person.address, city: 'New York' },
  age: 43,
};

console.log(updated);
console.log(person);

// working with arrays

const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

console.log(added);

// removing
const removed = numbers.filter((n) => n !== 2);
console.log(removed);

// updating
const updatedArray = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updatedArray);
