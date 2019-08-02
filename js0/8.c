#include <stdio.h>
// Good of a time to
// introduce pointers

int funA(int num1, int num2)
{
  return num1 + num2;
}

void funB(void (*ptr)())
{
  (*ptr)();
  printf("Function B was run!");
}

int main()
{
  int solution1;
  int solution2;
  int solution3;
  int solution4;

  int(*ptr)() = &funA;
  funB(ptr);

  solution1 = funA(6, 6);
  solution2 = funA(1, 2);
  solution3 = funA(-2, -2);
  solution4 = funA(-3, 3);

  printf("js0/8.c\n");
  printf("Expecting 12, got: %d\n", solution1);
  printf("Expecting 3, got: %d\n", solution2);
  printf("Expecting -4, got: %d\n", solution3);
  printf("Expecting 0, got: %d\n", solution4);
  return 0; 
}
