// The forEach() method executes a provided 
// function once for each array element.

var array1 = ['a', 'b', 'c'];

array1.forEach(function (element) {
    console.log(element);
});
// expected output: "a"
// expected output: "b"
// expected output: "c"


// FOR LOOP

let array2 = [1, 2, 3, 4, 5];

const forEach2 = (array) => {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i], i);
    }
}
console.log(forEach2(array2));
// expected output: 1 0
// expected output: 2 1
// expected output: 3 2
// expected output: 4 3
// expected output: 5 4

//  EXERCIESES:
// Try to get the correct output using the .forEach() method

[1, 2, 3].forEach((x, i, array) => console.log(x, i, array));
// expected output: 1 0 [1, 2, 3]
// expected output: 2 1 [1, 2, 3]
// expected output: 3 2 [1, 2, 3]

["Hello", "World", "again!"].forEach(x => console.log(x));
// Hello
// World
// again!

[50, 40, 30, 20, 10].forEach((x, i) => console.log(x, i));
// 50 0
// 40 1
// 30 2
// 20 3
// 10 4















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

















// The reduce() method executes a reducer
// function (that you provide) on each member 
// of the array resulting in a single output value.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// FOR LOOP

const array2 = [1, 2, 3, 4];

const reduced1 = (array) => {
    let accumulator = 0;
    for (var i = 0; i < array.length; i++) {
        accumulator += array[i];
    }
    return accumulator;
}

const reduced2 = (array) => {
    let accumulator = 5;
    for (var i = 0; i < array.length; i++) {
        accumulator += array[i];
    }
    return accumulator;
}

console.log("----");
console.log(reduced1(array2)); // 10
console.log(reduced2(array2)); // 15

//  EXERCIESES:
// Try to get the correct output using the .reduce() method

console.log("----");
let reduced3 = [1, 2, 3, 4, 5].reduce((ac, ci) => ac += ci )
console.log(reduced3); // 15

let reduced4 = ["This", " is", " a", " long", " string..."].reduce((ac, ci) => ac += ci)
console.log(reduced4); // "This is a long string..."

let reduced5 = [1, 2, 3, 4, 5].reduce((ac, ci) => ac * ci);
console.log(reduced5); // 120

let reduced6 = [1, 2, 3].reduce((ac, ci) => ac / ci)
console.log(reduced6); // 0.1666666
