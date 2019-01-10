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
// set the default function to fn
// created the filtered array
// set index to 0
// set remaining items to this
        if (remainingItems.length === 0) return filtered;
// if the remainingItems array is empty return the filtered array
        item = remainingItems.shift();
// set item to the next element that is shifted off of the array
        if (fn(item)) {
            filtered.push(item);
        }
// if function call on item is true
// push the item into the filtered array
        return this.gsFilter(fn, item, filtered, index + 1, remainingItems);
// recursive call
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