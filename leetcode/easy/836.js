
function rectOverlap(r1, r2) {
  let doOverlap = function(r1, r2) {
    if (((r1.x + r1.width) < r2.x) || ((r2.x + r2.width) < r1.x)) {
    return false;
    }
    if (((r1.y + r1.height) < r2.y) || ((r2.y + r2.height) < r1.y)) {
    return false;
    }
    return true;
  }
  if (doOverlap(r1, r2)) {
  return false	 
  } else {
  return true 
  }
}

// Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// Output: true

console.log(rectOverlap([0,0,2,2], [1,1,3,3]), true)

console.log(rectOverlap([0,0,1,1], [1,0,2,1]), false)

// Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// Output: false
