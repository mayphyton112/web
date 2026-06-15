// 원시 타입
var num = 42;  // Number
var pi = 3.25; // Number ---->pi = 원주율 
var name = '홍길동'//String
var name = "홍길동" // String
var isStudent = true; //Boolean
// 파이썬만 대문자로 시작한다. True False
var nothing; // Undefined
console.log //---> =print
console.log('num: ', num);
console.log('pi type:', typeof(pi));
console.log('name:', typeof(name));
console.log('isStudent:', isStudent);
console.log('student:', typeof(isStudent))
console.log('nothing:', nothing);
console.log('nothing:', typeof(nothing))
// 오늘 날씨는 좋다. -->원래 프로그램 언어에는 종결자가 있다. 파이썬은 예외

//참조 타입
var fruits = ['사과', '바나나', '포도']; //Array
console.log('fruits: ', fruits);
console.log('fruits type: ', typeof(fruits));
var person = {
    'name': '홍길동',
    'age' : 20,
    'mail': 'gildong@gmail.com'
}; //object
console.log('person: ', person);
console.log('person type: ', typeof(person));

var myFun = function() {
    console.log('myFun() Called'); 
};//여기까지가 함수다 하지만 이름이 없어 익명함수라 한다.
//()즉시 실행
// var myFun = function(){console.log('myFun() Called');};--->이것도 되긴 한다.

console.log('myFun:', myFun);
console.log('myFun type:', typeof(myFun))
// myFun();
//자바 스크립트에서는 함수 또한 하나의 데이터이고 변수에 넣을 수 있다.
// https://hoazzinews.tistory.com/112