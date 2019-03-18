// check if a number is a power of 2

const powerOf2 = (n) => {
  if (typeof n !== 'number')
    return 'Not a number';

  return n && (n & (n - 1)) === 0;
}

console.log(powerOf2(16)) // true
console.log(powerOf2(18)) // false
console.log(powerOf2(256)) // true
