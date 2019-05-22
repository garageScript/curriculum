// https://leetcode.com/problems/merge-intervals/

/*
Given a collection of intervals, merge all
overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Explanation: Since intervals [1,3] and [2,6] overlaps,
merge them into [1,6].


Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are
considered overlapping.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
  let result = []

  intervals.sort((i1, i2) => i1[0] > i2[0] ? 1 : -1)

  if (intervals.length) {
    result.push(intervals[0])
  }
  
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i]
	 
    let last = result.pop();

console.log(last, ' last')	 
console.log(last[1], ' last[1]')	 

    if (interval[0] > last[1]) {
      result.push(last)
      result.push(interval)	    
    } else if (last[1] < interval[1]) {
      last[1] = interval[1]
      result.push(last)	    
    }	   
  }	
  return result	
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log('output =', [[1,6],[8,10],[15,18]])
console.log(merge([[1,4],[4,5]]))
console.log('output =', [[1,5]])
