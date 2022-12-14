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

 // 16. 핸드폰 번호 가리기

 function solution(phone_number) {
     let answer = []
     let temp = phone_number.split('')

     for (let i = temp.length - 1; i >= 0; i--) {
         if(i >= temp.length - 4){
             answer.push(temp[i])
         }else answer.push("*")
     }

     return answer.reverse().join("");
 }

 // 17. 나누어 떨어지는 숫자 배열열

 function solution(arr, divisor) {
     let answer = [];
     arr = arr.sort((a,b) => a - b)

     arr.forEach( (num) => {
         if( num % divisor === 0){
             answer.push(num)
         }
     })


     return answer.length === 0 ? [-1] : answer;
 }

 // 18 가장 작은 수 제거하기
 function solution(arr) {
     let answer = [];
     let minValue = Math.min(...arr);

     if(arr.length > 1){
         arr.forEach((num) => {
             if(num > minValue ){
                 answer.push(num)
             }
         })
     }else return [-1]


     return answer;
 }

 // 19 음양 더하기
 function solution(absolutes, signs) {
     let answer = 0;

     for (let i = 0; i < absolutes.length; i++) {

         if(signs[i]=== false){
             absolutes[i] = -absolutes[i]
         }

         answer += absolutes[i]
     }

     return answer;
 }

 //20 없는 숫자 더하기
 function solution(numbers) {
     let answer = 0;

     for (let i = 0; i < 10; i++) {
         if(!numbers.includes(i)){
             answer += i
         }
     }

     return answer;
 }