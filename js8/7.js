/*
Edit distance
Given 2 strings,
return the minimum sum of ASCII values of characters that you need to 
delete in the 2 strings in order to have the same string

solution("bit", "it"); // returns 98 because 'b' ascii value is 98
solution("dit", "nit"); //returns 210 because 'd' (100) and 'n' (110) is deleted

Hint To get the sum of ascii value of a string, do 
"string".split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
*/