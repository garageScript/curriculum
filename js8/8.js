/* Maximum Loot
Given an array representing a neighborhood where every element is
a house with a specific number value of loot inside.Return the maximum loot
you can achieve, with the condition that
if you steal from the house of index n, you cannot steal from index n - 1, and n + 1.

solution([1000, 2000, 1001]) // returns 2001
solution([1000, 5000, 3000]) // returns 5000
*/

module.exports = {
    solution,
};
