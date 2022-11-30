function solution(n) {
    let answer;
    let x = 1;

    while ( n > x){
        if(x * x === n){
            answer = (x + 1) * (x + 1)
            break
        }else if (x * x !== n){
             x++
        }

        answer = -1
    }

    return answer;
}

console.log(solution(121))
console.log(solution(9))
console.log(solution(3))