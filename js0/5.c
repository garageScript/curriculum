#include <stdio.h>
#include <stdbool.h>

/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

int largest(int num1, int num2, int num3)
{
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num3) return num2;
  return num3;
}


int main()
{
  int solution1;
  int solution2;
  int solution3;
  int solution4;

  solution1 = largest(6, 6, 7);
  solution2 = largest(-2, -3, -9);
  solution3 = largest(-2, -2, 9);
  solution4 = largest(3, 2, 1);

  printf("Js0/5.c\n");
  printf("Expecting 7, got: %d\n", solution1);
  printf("Expecting -2, got: %d\n", solution2);
  printf("Expecting 9, got: %d\n", solution3);
  printf("Expecting 3, got: %d\n", solution4);
  return 0;
}

