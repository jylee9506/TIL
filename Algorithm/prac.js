function solution(seoul) {
    let answer = 0;

    for (let i = 0; i < seoul.length; i++) {
        if(seoul[i] == "Kim"){
            answer = i
        }
    }

    return "김서방은 " + answer + "에 있다";
}
console.log(solution(["Jane", "Kim"]))

