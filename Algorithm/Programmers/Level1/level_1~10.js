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

// 2. 평균 구하기
function solution(arr) {
    var answer = 0;
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    answer = sum/arr.length

    return answer;
}

// 3. 약수의 합
function solution(n) {
    var answer = 0;

    for(let i = 1; i <= n; i++){

        if(n%i == 0){
            answer += i
        }
    }

    return answer;
}


// 4. 짝수 홀수 개수
function solution(num_list) {
    var answer = [];
    let evenCnt = 0;
    let oddCnt = 0;

    for(let i = 0; i < num_list.length; i++){

        if(num_list[i] % 2 !== 0){
            oddCnt++
        }else{
            evenCnt++
        }

    }
    answer = [evenCnt, oddCnt]

    return answer;
}

console.log(solution([,1,2,3,4,5]))

// 5. 자릿수 더하기
function solution(n)
{
    var answer = 0;
    let temp = n.toString().split("")

    temp.forEach(element => {
        answer = parseInt(answer) + parseInt(element)
    });

    return answer;
}

// 다른 답 reduce 사용

// 6. 자연수 뒤집어 배열로 만들기
function solution(n) {
    return String(n).split("").reverse().map((data) => Number(data))
}