/**
 * Replicate Array.prototype.filter and call it gsFilter
 * @returns {[]}
 */



[1, 20, 300].filter(x => x > 6);
console.log("​[1, 20, 300].filter(x => x > 6);", [1, 20, 300].filter(x => x > 6));
// 20
// 300

const solution = () => {
    Array.prototype.gsFilter = function() {

    }
}



// solution();

console.log(solution([].gsFilter(x => x > 6))); // [20, 30]
console.log(solution([].gsFilter(x => x > 2))); // 
console.log(solution(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].gsFilter(x => x.length > 6)));
console.log(solution(['hello', 'world', '!'].gsFilter(x => x.length > 2)));




// console.log(([10, 20, 300].filter(x => x > 11))); // [20, 30]
// console.log(([1, 2, 3, 4, 5].filter(x => x > 2))); // [3, 4, 5]

// console.log((['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].filter(x => x.length > 6)));
// ["exuberant", "destruction", "present"]

// console.log((['hello', 'world', '!'].filter(x => x.length > 2)));
// ["hello", "world"]