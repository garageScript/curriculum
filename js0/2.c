#include <stdio.h>

/**
 * Takes in 3 numbers, returns their sum
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 **/

int sum3(int num1, int num2, int num3)
{
  int result;

  result = num1 + num2 + num3;
  return result;
}

int main()
{
  int solution1;
  int solution2;
  int solution3;
  int solution4;

  solution1 = sum3(6, 6, 6);
  solution2 = sum3(1, 2, 30);
  solution3 = sum3(-2, -2, -5);
  solution4 = sum3(-3, 3, -1);

  printf("js0/2.c\n");
  printf("Expecting 18, got: %d\n", solution1);
  printf("Expecting 33, got: %d\n", solution2);
  printf("Expecting -9, got: %d\n", solution3);
  printf("Expecting -1, got: %d\n", solution4);
  return 0;
}

