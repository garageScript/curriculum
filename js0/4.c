#include <stdio.h>
#include <stdbool.h>

/**
 * Takes in 2 numbers, returns the larger number
 * @param {number} a
 * @returns {number}
**/


int larger(int num1, int num2)
{
  if (num1 > num2) return num1;
  if (num2 > num1) return num2;
  return 0;
}

int main()
{

  int solution1;
  int solution2;
  int solution3;
  int solution4;

  solution1 = larger(6, 7);
  solution2 = larger(-2, -9);
  solution3 = larger(-2, 9);
  solution4 = larger(3, 2);

  printf("js0/4\n");
  printf("Expecting 7, got: %d\n", solution1);
  printf("Expecting -2, got: %d\n", solution2);
  printf("Expecting 9, got: %d\n", solution3);
  printf("Expecting 3, got: %d\n", solution4);
  return 0;
}


