 // 11. 정수 내림차순으로 배치하기
 function solution(n) {
     let answer = 0;
     let desc = n.toString().split('').sort((a,b) => b-a).join('')
     answer = Number(desc)

     return answer
 }
 // 12. 나머지가 1이 되는 가장 작은 수
 function solution(n) {
     let answer = 0;


     for (let i = 1; i <= n; i++) {
         if(n % i === 1){
             answer = i
             break
         }

     }

     return answer
 }

 // 13. 두 정수 사이의 합
 function solution(a, b) {
     let answer = 0;

     if( a > b){
         let z = b
         b = a
         a = z
     }

     for(let i = a; i <= b; i++) {
         answer += i
     }



     return answer
 }

 // 14. 콜라츠 추축

 function solution(n) {
     let answer = 0;

     while (n !== 1){
         if(n % 2 !== 0){
             n = (n * 3) + 1
         }else {
             n = n / 2
         }
         answer++

     }



     return answer <= 500 ? answer : -1;
 }

// 15. 서울에서 김서방 찾기
 function solution(seoul) {
     let answer = 0;

     for (let i = 0; i < seoul.length; i++) {
         if(seoul[i] == "Kim"){
             answer = i
         }
     }

     return "김서방은 " + answer + "에 있다";
 }