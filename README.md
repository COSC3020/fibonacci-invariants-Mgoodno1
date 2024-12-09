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
A good invariant would be at the start for each recursive call to fib(n), the array answer[] contains the fibonacci numbers up to fib(n-1). 
When calling fib(n), the recursive call fib(n-1) returns an array answer[] which contains the fibonacci numbers up to fib(n-1). This invariant would hold true at each level of recursion because, by the time fib(n) is computed, the fibonacci numbers from fib(0) to fib(n-1) have already been computed and then stored within answer[]. The array answer[] is progressively updated by adding new fibonacci numbers (fib(n)) at each step of recursion. For example, in the recursive call to fib(3): the array answer[] would contain [0, 1, 1]. Then the next fibonacci number fib(3) is computed and added to the array which results in [0, 1, 1, 2]. This process would continue until the final value of fib(n) is reached.


Sources:
Lecture slides 
Using ChatGPT to understand some of the logic of invariants more precisely

# Plagarism Statement
All exercises must contain the following statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”

