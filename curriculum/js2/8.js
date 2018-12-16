/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (item) {
    // To get the actual array, use this
    return 0;
  };
};

// EXAMPLE MAP

const three = [1, 2, 3];
const doubled = three.map(function (item) {
  return item * 2;
});
console.log(doubled);  // [2, 4, 6];
// 1 * 2
// 2 * 2
// 


// Map() creates a new array with the results of
// calling a provided function on every element in
// the calling array

let cars = ["Toyota", "B.M.W.", "Audi Ford"];

// we will iterate through 

const carsCharsLength = cars.map(car => car.length);

console.log(carsCharsLength);

let carsLength = [];

// FOR LOOP

for (let i = 0; i < cars.length; i++) {
  carsLength[i] = cars[i].length;
};

// .MAP() RECURSION

const solution = (cars, i = 0, clength = []) => {
  if (i === cars.length) {
    return clength;
  }
  clength[i] = cars[i].length
  return solution(cars, i + 1, clength);
}


console.log(solution([1, 2, 3])); // [1, 2, 3];
console.log(solution([])); // []
console.log(solution([1, 2, 3])); // 6, 7, 8