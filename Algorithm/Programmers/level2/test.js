// function solution(A) {
//
//     let answer;
//
//     for (let i = 0; i < A.length; i++) {
//
//         const binary = A[i].toString(2).split("")
//         console.log(binary)
//
//
//
//     }
//

// }

// console.log(solution([13, 7, 2, 8, 3]))
// console.log(solution([1,2,4,8]))
// console.log(solution([16, 16]))

function solution(N, K) {

    let answer
    let cnt = 0
    let glass  = [];

   for(let i = N; i > 0 ; i--){
       glass.push(i)

       for(let j = 0; j < glass.length; j++){

           if(K - glass[j] > 0){
               cnt++
               K = K - glass[j]

           }

       }
   }

   console.log(cnt)

}

console.log(solution(5, 8))

