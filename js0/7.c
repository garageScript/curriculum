#include <stdio.h>
#include <stdbool.h>

/**
 * Takes in 2 numbers, return true if their
 * sum is greater than 10
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */

bool sum(int num1, int num2)
{
  return (num1 + num2) > 10;
}

int main()
{
  bool solution1;
  bool solution2;
  bool solution3;
  bool solution4;

  solution1 = sum(-21, 0);
  solution2 = sum(-21, -20);
  solution3 = sum(0, 5);
  solution4 = sum(6, 5);

  printf("js0/7.c\n");
  printf("Expecting 0 or false, got: %d\n", solution1);
  printf("Expecting 0 or false, got: %d\n", solution2);
  printf("Expecting 0 or false, got: %d\n", solution3);
  printf("Expecting 1 or true, got: %d\n", solution4);
  return 0;
}

