// 21 가운데 글자 가져오기

function solution(s) {
    let answer = "";

    if(s.length % 2 !== 0){
        answer = s[Math.floor(s.length/2)]
    }else {

        answer = s[s.length/2 - 1] + s[s.length/2]
    }

    return answer

}
