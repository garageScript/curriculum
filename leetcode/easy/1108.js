// https://leetcode.com/problems/defanging-an-ip-address/

/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".
 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/

/**
 * @param {string} address
 * @return {string}
**/

var defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]')
};


const input1 = "1.1.1.1"
const output1 = "1[.]1[.]1[.]1"

const input2 = "255.100.50.0"
const output2 = "255[.]100[.]50[.]0"

console.log(defangIPaddr(input1), ' | ', output1)
console.log(defangIPaddr(input2), ' | ', output2)

