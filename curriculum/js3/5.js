/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (a, b, i = 0, keys = Object.keys(a), values = Object.values(a)) => {
    if (i === keys.length) return;
    console.log(keys);
    console.log(values);

    b(keys, values);

    return (a, b, i + 1, keys, values);
  }

solution();

const sum = (key, value) => {
  const count = key += value;
  return count;
}

console.log(solution({}, sum)); // ''
console.log(solution({1 : 1, 2 : 2, 3 : 3}, sum));
// 1 : 1
// 2 : 2
// 3 : 3

// describe('takes in object, function and calls function until there is no more key/value', () => {
//       it('should return base case', () => {
//         let count = '';
//         const result = solution({}, (key, value) => {
//           count += `Key/Value Pair = ${key}:${value}\n`;
//         });
//         expect(count).to.equal('')
//       });
//       it('should return Key/Value Pair = 1:1,2:2,3:3 for input {1:1,2:2,3:3},funct', () => {
//         let count = '';
//         const result = solution({
//           1: 1,
//           2: 2,
//           3: 3
//         }, (key, value) => {
//           count += `Key/Value Pair = ${key}:${value}\n`;
//         });
    // expect(count).to.equal(`Key/Value Pair = 1:1\nKey/Value Pair = 2:2\nKey/Value Pair = 3:3\n`)
// });