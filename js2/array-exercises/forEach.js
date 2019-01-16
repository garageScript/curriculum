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

// Feel free to play around