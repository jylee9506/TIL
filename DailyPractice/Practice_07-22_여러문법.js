 // 삼항 연산자
//condition ? true : false
//condition 이 true가 되면 전체가 true ,반대로 false 가 되면 전체가 false

const array = [];
let text = '';
if (array.length === 0) {
    text = '배열이 비었습니다.';
} else {
    text = '배열이 비어있지 않습니다.';
}
console.log(text);



console.log()/////////////////////////////////////////////////////////////////////
console.log(`//////////////////////////////////////////////////////`)


// 위 내용을 삼항 연산자로 표현 가능

const array1 = [];
let text1 = array1.length === 0 
    ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.'
console.log(text1);





console.log()/////////////////////////////////////////////////////////////////////
console.log(`//////////////////////////////////////////////////////`)

// 여러번 중첩에서 사용 하기
const condition1 = false;
const condition2 = false;

const value = condition1
    ? '와우'
    : condition2
        ? 'blabla'
        : 'foo'

console.log(value);     // 알아 보기 힘들어서 잘 안씁니다.




console.log()/////////////////////////////////////////////////////////////////////
console.log(`//////////////////////////////////////////////////////`)



// Truthy and Falsy 의미 알아보기
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);
// 위 내용을 제외 하고는 거의 모두 true 한 값


console.log()/////////////////////////////////////////////////////////////////////
console.log(`//////////////////////////////////////////////////////`)

// 단축 평가 논리 계산법
true && true
true && false
true || true
true || false

const dog = {
    name : '멍멍이'
};

function getName(animal) {
    if (animal){
        return animal.name;
    }
    return undefined;
}

const name = getName(dog);
console.log(name);


// 애니멀 값이 유효하면 네임을 받고 아니면 언디파인드


console.log()/////////////////////////////////////////////////////////////////////

// 위 내용 단축
const dog1 = {
    name1 : '멍멍이'
};

function getName(animal1) {
    return animal1 && animal1.name1;
}

const name1 = getName(dog1);
console.log(name1);


console.log()/////////////////////////////////////////////////////////////////////


console.log(true && 'hello');
console.log(false && 'hello');
console.log('hello' && 'bye');
console.log(null && 'hello');
console.log(undefined && 'hello');
console.log('' && 'hello');
console.log(0 && 'hello');
console.log(1 && 'hello');
// and(&&) 연산자는 앞에 있는 값이 true나 trudy한 값이면 결과 값은 뒤에 것이 되고 앞에 있는 값이 false 이면 결과물은 그 앞에 있는 값


console.log()/////////////////////////////////////////////////////////////////////

`
const namelessDog = {
    name: ''
};

function getName(animal) {
    const name = animal && animal.name;
    if (!name) {
        return '이름이 없는 동물입니다';
    }
    return name;
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
`
`
const namelessDog = {
    name: ''
};

function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
`

console.log()/////////////////////////////////////////////////////////////////////


console.log(false || 'hello');
console.log(null || 'hello');
console.log(undefined || 'hello');
console.log('' || 'hello');
console.log(0 || 'hello');

console.log(true || 'hello');
console.log(1 || 'hello');
console.log('hello' || 'bye');
// OR(||) 연산자에서는 앞에 값이 false 이면 뒤에 값 호출 앞에 값이 트루이면 앞에 값 호출



console.log()/////////////////////////////////////////////////////////////////////
console.log(`//////////////////////////////////////////////////////`)


// 함수의 기본 파라미터
// 기본 함수
function calculateCircleArea(r) {
    return Math.PI * r * r;
}

const area = calculateCircleArea(4);
console.log(area); // 50.26548245743669


console.log()/////////////////////////////////////////////////////////////////////


// r 값을 안 넣어주면 NaN
function calculateCircleArea(r) {
    return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area); // NaN


console.log()/////////////////////////////////////////////////////////////////////


// 아까 배운 것을 활용해 이렇게 작성 가능 (ES5)
function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793


console.log()/////////////////////////////////////////////////////////////////////


// 좀 더 간편하게 작성 가능 (,ES6)
function calculateCircleArea(r = 1) {
    return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793


console.log()/////////////////////////////////////////////////////////////////////


// 화살표 함수를 이용 가능 함
const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 3.141592653589793





console.log()
console.log(`//////////////////////////////////////////////////////`)



// 조건문

function isAnimal(text) {
    return (
        text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    );
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false



// 위 내용을 includes 함수를 통해 쓸 수 있음
function isAnimal(name) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(name);
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false




//화살표 함수로 나타내면
const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false



//주어진 값에 따라 다른 결과물을 내야할떄
function getSound(animal) {
    if (animal === '개') return '멍멍!';
    if (animal === '고양이') return '야옹~';
    if (animal === '참새') return '짹짹';
    if (animal === '비둘기') return '구구 구 구';
    return '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구


// switch case 로 나타냈을 떄
function getSound(animal) {
    switch (animal) {
        case '개':
            return '멍멍!';
        case '고양이':
            return '야옹~';
        case '참새':
            return '짹짹';
        case '비둘기':
            return '구구 구 구';
        default:
        return '...?';
    }
}

  console.log(getSound('개')); // 멍멍!
  console.log(getSound('비둘기')); // 구구 구 구


// 가독성이 좋고 훨씬 더 깔끔한 코드로 구현 ( 객체를 활용함 )
function getSound(animal) {
    const sounds = {
        개: '멍멍!',
        고양이: '야옹~',
        참새: '짹짹',
        비둘기: '구구 구 구'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구



//값에 따라 실행해야 하는 코드 구문이 다를 때
function makeSound(animal) {
    const tasks = {
        개() {
        console.log('멍멍');
        },
        고양이() {
        console.log('고양이');
        },
        비둘기() {
        console.log('구구 구 구');
    }
};
// const task = tasks[animal];
// if (!task) {
//     console.log('...?');
//     return;
// }
// task();
// 이런 식으로 선언 해주면 더 깔끔해짐

    if (!tasks[animal]) {
        console.log('...?');
        return;
    }
    tasks[animal]();
}

console.log(makeSound('개'))
console.log(makeSound('비둘기'))
console.log(makeSound('염소'))



console.log()
console.log(`//////////////////////////////////////////////////////`)



// 비구조화 할당

const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2


//
const object = { a: 1, b: 2 };

function print({ a, b }) {
console.log(a);
console.log(b);
}


//
const animal = {
    name: '멍멍이',
    type: '개'
};

const { name: nickname } = animal
console.log(nickname); // 멍멍이

//
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

//  아래 내용으로 바꿀 수 있음
const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);

//
const deepObject = {
    state: {
        information: {
        name: 'velopert',
        languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
};

const deepObject = {
    state: {
      information: {
        name: 'velopert',
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5
  };
  
  const { name, languages } = deepObject.state.information;
  const { value } = deepObject;
  
  const extracted = {
    name,
    languages,
    value
  };
  
  console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}


//

const deepObject = {
    state: {
      information: {
        name: 'velopert',
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5
  };
  
  const {
    state: {
      information: { name, languages }
    },
    value
  } = deepObject;
  
  const extracted = {
    name,
    languages,
    value
  };
  
console.log(extracted);



console.log()
console.log(`//////////////////////////////////////////////////////`)




// spread ( 객체, 배열을 펼치다)

const slime = {
    name: '슬라임'
};

const cuteSlime = {
    name: '슬라임', // => ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
    name: '슬라임',     //
    attribute: 'cute', // 위 두 내용을 지우고 ...cuteSlime, 위 내용이 들어옴
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

//

const slime = {
    name: '슬라임'
  };
  
  const cuteSlime = {
    ...slime,
    attribute: 'cute'
  };
  
  const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
  };
  
  console.log(slime);
  console.log(cuteSlime);
  console.log(purpleCuteSlime);
// 기존 객체를 복사하고 추가적인 값을 넣어줄 때

//배열에서 사용하기
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);

//
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]


console.log()
console.log(`//////////////////////////////////////////////////////`)




// rest
// rest는 생김새는 spread 랑 비슷한데, 역할이 매우 다릅니다.

// rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능합니다.




const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);


// 배열에서 사용하기 ( 배열에서의 rest는 맨 마지막에 위치 해야함)

const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);

//

function sum(a, b, c, d, e, f, g) {
    let sum = 0;
    if (a) sum += a;
    if (b) sum += b;
    if (c) sum += c;
    if (d) sum += d;
    if (e) sum += e;
    if (f) sum += f;
    if (g) sum += g;
    return sum;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);


//
function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // 21


// //
// 파라미터 : 함수에서 받아오는 값
// 인자 : 함수를 사용할 때 넣어주는 값
const myFunction(a) { // 여기서 a 는 파라미터
    console.log(a); // 여기서 a 는 인자
}

myFunction('hello world'); // 여기서 'hello world' 는 인자


//Quiz
//함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.

function max(...numbers) {
    return numbers.reduce(
        (acc, current) => (current > acc ? current : acc ), numbers[0]
    );
     // acc 이 current 보다 크면 결과값을 current 로 하고
    // 그렇지 않으면 acc 가 결과값
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);


console.log()
console.log(`//////////////////////////////////////////////////////`)



// scope ( 변수, 함수를 선언 할때 어디부터 어디까지 유효한지 )

// Global (전역) Scope: 코드의 모든 범위에서 사용이 가능합니다.
// Function (함수) Scope: 함수 안에서만 사용이 가능합니다.
// Block (블록) Scope: if, for, switch 등 특정 블록 내부에서만 사용이 가능합니다.

const value = 'hello!'; // 글로벌 스코프

function myFunction() {
  console.log('myFunction: ');
  console.log(value);
}

function otherFunction() {
  console.log('otherFunction: ');
  const value = 'bye!'; // 함수형 스코프
  console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);



//
const value = 'hello!';

function myFunction() {
    const value = 'bye!';
    const anotherValue = 'world';
    function functionInside() {
    console.log('functionInside: ');
    console.log(value);
    console.log(anotherValue);
}
functionInside();
}


myFunction()
console.log('global scope: ');
console.log(value);
console.log(anotherValue);



//블록 스코프
const value = 'hello!';

function myFunction() {
    const value = 'bye!';
    if (true) {
    const value = 'world';
    console.log('block scope: ');
    console.log(value);
}
    console.log('function scope: ');
    console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value);




console.log()
console.log(`//////////////////////////////////////////////////////`)


// hoisting( 아직 선언되지 않은 함수, 변수 끌어올려 사용하는 작동 방식)

myFunction();

function myFunction() {
    console.log('hello world!');
}
// 작동하는 이유는 자바스크립트 엔진이 끌어올려서 받아드림 ( 왠만하면 피해야한다)

