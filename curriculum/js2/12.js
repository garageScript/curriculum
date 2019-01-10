/**
 * Replicate Array.prototype.filter and call it gsFilter
 * @returns {[]}
 */

[1, 20, 300].filter(x => x > 6);
console.log("​[1, 20, 300].filter(x => x > 6);", [1, 20, 300].filter(x => x > 6));
// 20
// 300

const solution = () => {
    Array.prototype.gsFilter = function(fn, item, filtered = [], index = 0, remainingItems = this) {

        // if (this.length === index) return filtered;
        if (remainingItems.length === 0) return filtered;
        console.log("remainingItems = ", remainingItems)
        item = remainingItems.shift();
        console.log("item = ", item);

        if (fn(item)) {
            filtered.push(item);
        }
        console.log("filtered = ", filtered);

        console.log("index = ", index);

    return this.gsFilter(fn, item, filtered, index + 1, remainingItems);
    }
}

solution();

console.log(solution([1, 20, 300].gsFilter(x => x > 6))); // [20, 30]
console.log("----");
console.log(solution([0, 1, 2, 3, 4, 5].gsFilter(x => x > 2))); // [3, 4, 5]
console.log("----");
console.log(solution(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].gsFilter(x => x.length > 6)));
console.log("----");
console.log(solution(['hello', 'world', '!'].gsFilter(x => x.length > 2)));

// console.log(([10, 20, 300].filter(x => x > 11))); // [20, 30]
// console.log(([1, 2, 3, 4, 5].filter(x => x > 2))); // [3, 4, 5]
// console.log((['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].filter(x => x.length > 6)));
// ["exuberant", "destruction", "present"]
// console.log((['hello', 'world', '!'].filter(x => x.length > 2)));
// ["hello", "world"]