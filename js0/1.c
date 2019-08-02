#include <stdio.h>

/**
 * Takes in 2 numbers, returns their sum
 * @param {number} a
 * @param {number} b
 * @returns {number}
**/

int sum2(int num1, int num2)
{
  int result;

  result = num1 + num2;
  return result;
}

int main()
{
  int solution1;
  int solution2;
  int solution3;
  int solution4;

  solution1 = sum2(6, 6);
  solution2 = sum2(1, 2);
  solution3 = sum2(-2, -2);
  solution4 = sum2(-3, 3);

  printf("js0/1.c\n");
  printf("Expecting 12, got: %d\n", solution1);
  printf("Expecting 3, got: %d\n", solution2);
  printf("Expecting -4, got: %d\n", solution3);
  printf("Expecting 0, got: %d\n", solution4);
  return 0;
}
