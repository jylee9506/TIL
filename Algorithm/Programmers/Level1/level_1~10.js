// 1. 짝수와 홀수
function solution(num) {
    var answer = '';

    if(num%2 == 0) {
        answer = "Even"
    }else {
        answer = "Odd"
    }
    return answer;
}

// 평균 구하기
function solution(arr) {
    var answer = 0;
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    answer = sum/arr.length

    return answer;
}

// 약수의 합
function solution(n) {
    var answer = 0;

    for(let i = 1; i <= n; i++){

        if(n%i == 0){
            answer += i
        }
    }

    return answer;
}

