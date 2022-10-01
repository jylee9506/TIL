function solution(s) {
    let deleteZero = 0
    let cnt = 0

    while (s.length !== 1){
        const originLength = s.length
        s = s.split("").filter(v => v === "1").join("")
        const nowLength = s.length
        deleteZero += originLength - nowLength
        s = nowLength.toString(2)
        cnt++
    }

    return [cnt , deleteZero];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));