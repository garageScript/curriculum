
// The map() method creates a new array with the results of 
// calling a provided function on every element in the calling array.

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);
// [(1 * 2), (4 * 2), (9 * 2), (16 * 2)]

console.log(map1);
// expected output: Array [2, 8, 18, 32]

console.log("----");

// FOR LOOP 

arr = [1, 4, 9, 16];

const mapped = (array) => { 
    let holder = [];
    for (var i = 0; i < array.length; i++) {

        holder.push(arr[i] * 2);
    }
    return holder;
}

console.log(mapped(arr));
// expected output: Array [2, 8, 18, 32]


//  EXERCIESES:
// Try to get the correct output using the .map() method

let map2 = [1, 2, 3, 4, 5].map()
// expected output: array [5, 10, 15, 20, 25]
console.log(map2);


let map3 = ["Hola", "Bonjour", "Hallo", "Privet", "Nǐ hǎo"].map();
// expected output: array ["Hola World", "Bonjour", "Hallo", "Privet", "Ni Hao"];
console.log(map3);

let map4 = [10, 20, 30, 40, 50].map();
// expected output: array [2, 4, 6, 8, 10]
console.log(map4);


let map5 = [10, 20, 30, 40, 50].map();
// expected output: array [5, 15, 25, 35, 45]
console.log(map5);


let map6 = [1, 2, 3, 4, 5].map();
// hint: remainder
// expected output: array [1, 0, 1, 0, 1]
console.log(map6);

// Feel free to play around