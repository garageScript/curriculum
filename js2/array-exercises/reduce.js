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

// Feel free to play around
