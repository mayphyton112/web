//호이스팅(Hoisting) 현상
// console.log(num)
// var num = 10; 

//변수를 나중에 선언할때 자바스크립트 엔진은
// var num;
// console.log(num) // undefined 이렇게 해석한다.



//-------------2015년 구글 엔지니어들이 es6을 만들었다. 
//그래서 나온 것이 let이다.
let name = 'gildong'

const PI = 3.14; //상수선언 및 초기화
// PI = 100;  //Assignment to constant variable.--> 상수 변경 불가능 오류

/*
var(x) let(o), const(o)
*/

//연산자
//산술연산자
console.log(10 + 20); //30
console.log(10 - 20); //-10
console.log(10 * 20); //200
console.log(10 / 20); // .5
console.log(10 % 20); // 10

//대입 연산자, 복합대입연산자
num = 10;
num += 10; //num = num + 10
num -= 10; //num = num + 10
num *= 10; //num = num + 10
num /= 10; //num = num + 10
num %= 10; //num = num + 10

//비교연산자
console.log(10 > 20); //false
console.log(10 >= 20); //false
console.log(10 < 20); //true
console.log(10 <= 20); //true
console.log(10 == 20); //false
console.log(10 != 20); //true

let num1 = 10;
let num2 = '10'; //--> 컴퓨터가 숫자로 바꿈
console.log('num1 == num2: ', num1 == num2); //num1 == num2: true
console.log('num1 === num2: ', num1 === num2); //num1 === num2: false 타입& 데이터형태비교
console.log('num1 === num2: ', num1 !== num2); //num1 !== num2: false 액면& 형태비교

//논리연산자
//&& --> and
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// ||---> or
console.log(true || true); //true
console.log(true || false); //false
console.log(false || true); //false
console.log(false || false); //false

// ! --> not
console.log(!true); //true
console.log(!false); //true
console.log(!!false); //false -->가끔 쓰이는 경우가 있다.

// 증감 연산자
let myScore =80;
console.log('myScore:', myScore); //80

myScore += 1;
myScore++;
console.log('myScore:', myScore); //80

myScore--;
console.log('myScore:', myScore); //80

var temp = myScore--; //후위 증감연산자
console.log('temp: ', temp); // 80 할당연산자가 증감연산보다 우선순위가 높다.
console.log('myScore: ', myScore) //79

myScore = 80;
temp = --myScore; //-->전위
console.log('temp: ', temp) //79
console.log('myScore: ', myScore) //79

// 삼항(조건식) 연산자
// status = 'success' if myScore > 80 else 'fail' -->python

let score = 85;
let grade = score >= 90 ? 'A' : 'B'; 
//90과 크거나 같으면 ? 뒤의 A 그렇지 않으면 : 뒤의 B
console.log('grade:', grade);
