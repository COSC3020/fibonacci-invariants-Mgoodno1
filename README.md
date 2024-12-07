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
A good invariant would be [0... n - 1].
This invariant is directly tied to how the fibonacci sequence is being constructed within the recursive function. At each recurssion the function will ensure that all computed fibonnacci numbers up to n-1 are correct before computing fib(n). Thus, the invariant will hold true at the begining of each recursive call and will ensure the array will correctly represent the sequence up to the index n. For example fib(3), the sequence [0, 1, 1] would be already computed, then fib(3) is computed as fib(2) + fib(1) giving 2, producing [0, 1, 1, 2].
