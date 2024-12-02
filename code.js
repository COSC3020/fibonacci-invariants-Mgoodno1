function fib(n) {
    if (n < 0) {
        return "Invalid Input";
    }
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1];
    }

    const answer = fib(n - 1);
    const nextFib = answer[answer.length - 1] + answer[answer.length - 2];
    answer.push(nextFib);
    return answer;
}
