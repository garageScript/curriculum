/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function () {
    // To get the actual array, use this
    return [];
  };
};


console.log(solution([1, 2, 3])); // 6
console.log(solution([1, 2, 3])); // 4
console.log(solution(["one", "two", "three"]));
//  one: "1 of 3", two: "2 of 2", three: "3 of 3" }'

console.log(solution(["bob", "obo", "boo"])); 
// { bob: true, obo: false, boo: true }
