# Linked List Practice Problems:

example linked lists:
```
e1: 5,6,7,8,8,9
e2: 3,6,19
```

## Sections
1. Closure
2. Simple traversal
3. Cumulative examples
4. Add / Remove
5. Double Pointers

## Problems
1. Given a linked list, return a function. every time returned function is called, return the next node. After the last node, return null
    const r = solution(e2)
    r() // returns 3
    r() // returns 6
    r() // returns 19
    r() // returns null
1. Given a linked list, return a function. every time returned function is called, return the next node with even value. After the last node, return null
    const r = solution(e1)
    r() // returns 6
    r() // returns 8
    r() // returns 8
    r() // returns null
2. return the last element of a linkedList:
  solution(e1) -> return 9
2. return the length of a linkedList:
  solution(e1) -> return 6
2. return largest element of a linkedList:
  solution(e1) -> return 9
2. count how many times a value shows up in a linked list: 
  solution(e1, 8) -> return 2
2. return the sum of all values in a linked list:
  solution(e1, 8) -> return 2
2. Given a linkedList, a time(ms) X, and a function, run the function with every node in the linkedList, with X time in between each call.
    solution(e2, 350, (n) => {
      n.v = "heo"
    }) -> after 350ms e2 becomes "heo", 6. 19. then 350ms after that e2 becomes "heo", "heo", 19, then 350ms after that e2 becomes "heo", "heo", 19
3. return the most common number in a linked list:
  solution(e1) -> return 8
3. return an array of unique values
  solution(e1) -> return [5,6,7,9]
3. Given a number, return a linked list with index values:
  solution(4) -> return 0 -> 1 -> 2 -> 3
3. Given 2 numbers, return an array of linked list with index values:
  solution(2, 4) -> return [0 -> 1 -> 2 -> 3,  0 -> 1 -> 2 -> 3]
4. Given a number and a function, call the function with the index and return a linked list of values returned by the function
    solution(4, (saz) => {
      return saz % 2
    })) -> return 0 -> 1 -> 0 -> 1
4. Given a linked list, return a function. when returned function is called, whatever the function returns is added to the linked list at the end
    const r = solution(e2)
    r("hello") // e2 is 3, 6, 19, "hello"
    r(99) // e2 is 3, 6, 19, "hello", 99
4. Given a linked list in sorted order and a number, add the number to the linked list in order
    solution(e2, 15) // e2 becomes 3,6,15, 19
4. Given a linked list in sorted order and a number, remove all nodes with that number
    solution(e1, 8) // e1 becomes 5, 6, 7, 9
4. Given a linked list in sorted order, return a function. when returned function is called with a number, whatever the function returns is added to the linked list at the end
    const r = solution(e2)
    r("hello") // e2 is 3, 6, 19, "hello"
    r(99) // e2 is 3, 6, 19, "hello", 99
4. given a linkedlist, return a new linked list with the same values
    const e8 = clone(e1) // e8 is 5,6,7,8,8,9 (same values as e1, but different objects)
4. return the last node and delete the node:
    pop(e1) -> returns 9, but e1 becomes 5,6,7,8,8
4. Given a linked list, return a function. when returned function is called the last node is removed from the linked list.
    const r = solution(e2)
    r() // e2 becomes 3,6
    r() // e2 becomes 3
    r() // e2 becomes undefined
5. Return nth node:
    getN(e1, 2) -> return node with value 6
5. Return nth node from the back:
    getNLast(e1, 3) -> return node with value 8
5. merge 2 sorted linked lists: (Create a new LL)
    merge(e1, e2) -> returns linked list: 3,5,6,6,7,8,8,9,19
5. rotates a linked list at the given index:
    rotate(e1, 3) -> returns e1, which is now 8,8,9,5,6,7
