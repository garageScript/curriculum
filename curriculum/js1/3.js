/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, i = 0, str = '') => {
	if (i === x) {
		return str;
	}
	str += "hello ";
	return solution(x, i+1, str);
};

console.log(solution(2)); 

module.exports = {
  solution,
};
