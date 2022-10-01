function solution(numbers) {
    let answer = '';
    let num = numbers.map(x => x + "").sort((a,b) => (b + a) - (a + b)).join("")


    answer = num[0] == "0" ? "0" : num.join("")

    return answer;
}

console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]))
