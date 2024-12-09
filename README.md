# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

Answer:
A good invariant would be at the start for each recursive call to fib(n), the fibonacci numbers for indices 0 to n - 1.
Which is true when the function is about to compute fib(n) in a recursive call and all previous fibonacci numbers have been calculated for use. While it is false when the function has not yet computed all the necessary fibonacci numbers (at an earlier stage of recursion) then the invariant would not hold. However, this invariant holds true at every step of recursion and it guarantees that the fibonacci numbers will always be available when they are needed.
This invariant would work because the fibonacci numbers for all previous indices are computed before calculating fib(n). Which ensures that the function can compute fib(n) using the previously computed values of fib(n-1) and fib(n-2). For example fib(3), the sequence [0, 1, 1] would be already computed, then fib(3) is computed as fib(2) + fib(1) giving 2, producing [0, 1, 1, 2].

# Plagarism Statement
All exercises must contain the following statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”


Sources:
Lecture slides 
Using ChatGPT to understand some of the logic of invariants more precisely
