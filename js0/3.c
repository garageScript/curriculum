#include <stdio.h>
#include <stdbool.h>

/**
 * Takes in a number, returns true if 
 * a number is greater than 5
 * @param {number} a
 * @returns {boolean}
**/

bool greaterThan(int a)
{
  if (a > 5) return true;
  return false;
}

int main()
{
  bool solution1;
  bool solution2;
  bool solution3;
  bool solution4;

  solution1 = greaterThan(-5);
  solution2 = greaterThan(5);
  solution3 = greaterThan(0);
  solution4 = greaterThan(6);

  printf("Js0/3.c \n");
  printf("Expecting 0 or false, got: %d\n", solution1);
  printf("Expecting 0 or false, got: %d\n", solution2);
  printf("Expecting 0 or false, got: %d\n", solution3);
  printf("Expecting 1 or true, got: %d\n", solution4);
  return 0;
}


