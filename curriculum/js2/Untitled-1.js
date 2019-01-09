[1, 2, 3].reduce((ac, ci) => ac + ci);
// 6

[1, 2, 3].map(x => x * 2);
// [3, 4, 5]

[1, 2, 3].forEach((x, ci) => console.log(x, ci));
// 1 : 0
// 2 : 1
// 3 : 2


[1, 20, 300].filter(x => x > 6);