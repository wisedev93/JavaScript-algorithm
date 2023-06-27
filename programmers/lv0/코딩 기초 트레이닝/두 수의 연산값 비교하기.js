function solution(a, b) {
    const x = +(a.toString() + b.toString())
    const y = 2 * a * b
    return x > y ? x : y;
}