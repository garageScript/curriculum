/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  return 0;
    let next;
    for (let i = a + 1; true; i++) {
          if (i % 7 === 0) {
                  next = i; break;
                }
        }
    return next;
};