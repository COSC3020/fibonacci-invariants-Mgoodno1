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
A good invariant would be the value of n is a non-negative integer. This is because fib(n) takes an integer and it will be recursively operated and reduces n each time. This invariant helps prove the correctness of the function because it ensures that the input is valid at each step, it progression to a base case, and the output will always be an array of Fibonacci numbers.The function always operates on a non-negative integer, which are ensured by the base case checks which will prevent recursion for negative numbers. Thus, at the beginning of each recursive call, the input n is always a non-negative integer. For example let us consider an example like fib(3). When fib(3) is called, it would first call fib(2) and then fib(2) would call fib(1), which would return [0,1] in this case. Then the function computes fib(2) by adding one making it [0,1,1]. Finally fib(3) would be calculated and also added to array becoming [0,1,1,2]. As the recursion unwinds, the array keeps building up the Fibonacci sequence until the desired n. Thus, the invariant about n being a non-negative integer ensures that the function will only operate on valid inputs, while the recursive calls and array ensure the sequence is computed correctly for the input n.
