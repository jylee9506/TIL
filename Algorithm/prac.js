// function solution(left, right) {
//     let answer = 0;
//     let arr = [];
//
//     for (let i = left; i <= right ; i++) {
//         let divisor = 0
//
//         for(let j = 1; j <= i; j++){
//
//             if(i % j === 0){
//                 divisor++
//             }
//
//         }
//
//         arr.push(divisor)
//
//         if(divisor % 2 === 0){
//             answer += i
//         }else answer -= i
//     }
//
//
//     return answer;
// }


function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {

        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

console.log(solution(13,17))
console.log(solution(24,27))




