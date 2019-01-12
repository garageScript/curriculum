/**
 * Replicate Array.prototype.filter and call it gsFilter
 * @returns {[]}
 */
[1, 20, 300].filter(x => x > 6);
console.log("​[1, 20, 300].filter(x => x > 6);", [1, 20, 300].filter(x => x > 6));
// 20
// 300

const solution = () => {
    Array.prototype.gsFilter = function (fn, i = 0, filtered = []) {
        if (i === this.length) return filtered;
        if (fn(this[i], i, this)) filtered.push(this[i]);
        return this.gsFilter(fn, i + 1, filtered);
    }
}

solution();

console.log([1, 20, 300].gsFilter(x => x > 6)); // [20, 30]
console.log("----");
console.log([0, 1, 2, 3, 4, 5].gsFilter(x => x > 2)); // [3, 4, 5]
console.log("----");
console.log(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].gsFilter(x => x.length > 6));
console.log("----");
console.log(['hello', 'world', '!'].gsFilter(x => x.length > 2));

// console.log(([10, 20, 300].filter(x => x > 11))); // [20, 30]
// console.log(([1, 2, 3, 4, 5].filter(x => x > 2))); // [3, 4, 5]
// console.log((['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].filter(x => x.length > 6)));
// ["exuberant", "destruction", "present"]
// console.log((['hello', 'world', '!'].filter(x => x.length > 2)));
// ["hello", "world"]