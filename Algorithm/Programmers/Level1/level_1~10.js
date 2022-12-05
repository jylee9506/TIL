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
// 7. 정수 제곱근 판별하기
function solution(n) {
    let num = Math.sqrt(n);
    if(num % 1 === 0 ) return (num+1) * (num+1)
    else return -1
}

//Math.sqrt 는 정수 제곱근 뽑아내는 내장 함수

//8. 문자열 내 p와 y의 개수
function solution(s){
    let str = s.toLowerCase();
    let pCnt = 0;
    let yCnt = 0;

    for(let i = 0; i < str.length; i++ ){
        if(str[i] === "p"){
            pCnt++
        }else if(str[i] === "y"){
            yCnt++
        }
    }

    return (pCnt === yCnt) ? true : false;
}

//9. 하샤드 수
function solution(x) {
    let arr = x.toString().split('')
    let sum = 0

    for (let i in arr) {
        sum += parseInt(arr[i])
    }


    return x % sum === 0 ? true : false;
}

// 10. x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    let answer = [];

    for(let i = 1; i <= n; i++){
        answer.push(i * x)

    }

    return answer;
}