#include <stdio.h>
#include <stdbool.h>

bool greater(int num1, int num2)
{
  return (num1 > num2);
}

int main()
{

  bool solution1;
  bool solution2;
  bool solution3;
  bool solution4;

  solution1 = greater(-21, 0);
  solution2 = greater(-21, -20);
  solution3 = greater(0, 5);
  solution4 = greater(6, 5);

  printf("Js0/6.c\n");
  printf("Expecting 0 or false, got: %d\n", solution1);
  printf("Expecting 0 or false, got: %d\n", solution2);
  printf("Expecting 0 or false, got: %d\n", solution3);
  printf("Expecting 1 or true, got: %d\n", solution4);
  return 0;
}

