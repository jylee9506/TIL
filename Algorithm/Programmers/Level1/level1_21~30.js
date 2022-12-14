
// 21. 가운데 글자 가져오기
function solution(s) {
    let answer = "";

    if(s.length % 2 !== 0){
        answer = s[Math.floor(s.length/2)]
    }else {

        answer = s[s.length/2 - 1] + s[s.length/2]
    }

    return answer

}

// 22. 수박수박수박수박수박수?
function solution(n) {
    let answer = ""
    let strSu = "수", strPark = "박"


    for (let i = 1; i <= n; i++){
        if(i % 2 === 0){
            answer += strPark
        }else answer += strSu
    }


    return answer
}

// 23. 내적

function solution(a, b) {

    let answer = 0;

    if(a.length === b.length){

        for (let i = 0; i < a.length; i++) {

            answer += a[i] * b[i]

        }

    }

    return answer;
}

// 24. 문자열 내림차순으로 배치하기
function solution(s) {
    let answer = s.split("").sort().reverse().join("");

    return answer;
}

// 25. 약수의 개수와 덧셈
function solution(left, right) {
    let answer = 0;
    let arr = [];

    for (let i = left; i <= right ; i++) {
        let divisor = 0

        for(let j = 1; j <= i; j++){

            if(i % j === 0){
                divisor++
            }

        }

        arr.push(divisor)

        if(divisor % 2 === 0){
            answer += i
        }else answer -= i
    }


    return answer;
}



