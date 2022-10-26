# recursion
Solutions to the Odin Project CS Assignments section.

## Assignment 1
The goal of this was to create an array containing N numbers from the Fibonacci Sequence both iteratively & recursively (so N of '3' would equal [0,1,1]).
---
My recursive solution could easily be reduced to a one-liner using the ternary operator for the base case and concatenating the final portion of the logic into a single array using the spread operator. I just felt that on the off-chance anyone actually reads this it is easier to understand keeping the recursive loop separated.
---
I must admit that even though recursion is mathematically a simple concept to understand it took me reading a fair bit about the Javascript engine (specifically the execution context) to have my 'eureka' moment. I was looking at functions that had their own internal variables (e.g. let num = 1) and it seemed to me that each time the recursive call would run the variables would be redefined (so let num = 1 would be reinstated as a new variable each time the function was called). 
---
Once i realised that the recursive 'stack' is effectively encapsulated in a similar way to a closure, recursion suddenly made total sense! At the point the recursive call is made the function creates a closure from the current lexical scope and 'pauses' with that info stored until the base case is reached!

## Assignment 2
The goal here was to create the merge-sort algorithm using recursion. After finishing this exercise it seems to me that approaching any 'divide & conquer' type sorts/searches are significantly easier to grasp using recursion than iteration. I started this by trying to build a merge-sort function iteratively and I think this took me probably 3 times longer to solve then the recursive solution!
---
I really like how elegant recursion seems to make tree/graph like algorithmic structures. With merge-sort we create a execution stack by continually splitting the passed array by half until we reach multiple arrays of a single value. Since we've then already built the logic that links each of these arrays (via the stack) we only have to merge each with it's partner until all the calls pop of the stack and we're left with a sorted array!