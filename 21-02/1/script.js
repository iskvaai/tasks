/*1)Переделайте приведенный код так, чтобы в нем использовались операции
    +=, -=, *=, /=, ++, --.
Количество строк кода при этом не должно измениться.
    Код для переделки:
    let num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);

2)Переделайте этот код так, чтобы в нем использовались операции ++ и --.
Количество строк кода при этом не должно измениться.
    var num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num);*/
//1
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
alert(num);

//2
var num1 = 10;
num1 ++ ;
num1 ++ ;
num1 -- ;
alert(num1);

//Реализовать примеры на все 4 комбинации логическим операторам && и ||
/*
||
1)true + false = true;
2)false + true = true;
3) true + true = true;
4)false + false = false;*/

let a = 4;
let b = 10;
let c = a < 5 || b > 11;
console.log(c); //true + false = true



let  num2 = 1;
let num3 = 0 ;
let num4 = 2;
let result = num2 == num3 ||  num4 > num2;
console.log(result);//false + true = true

let user = 'ais' ;
let name = 'Ais';
let result3 = user !== name || name != user;
console.log(result3);//true + true = true

let a2 = 6;
let b2 = 6;
let c2 = b2 != a2 || b2 > a2  ;
console.log(c2);//false + false = false

//Оператор тождественности также сравнивает два значения и их тип,
// и если они равны, возвращает true, иначе возвращает false


/*
&&
1) false + true =  false
2)false  + true = false
3) false + false = false
4) true + true = true*/


let p1 = 'Aidan';
let p2 = 'AIDAN';
let p3 = p1 === p2 && p2 != p1;
console.log(p3);//false + true =  false

let num5 = 12;
let num6 = 10;
let result6 = num5 <= num6 && num5 == num6;
console.log(result6); //false + false = false

let age = 21;
let str = '21';
let result8 = age === str && str != age;
console.log(result8);//false + false = false

let number1 = 0;
let number2 = 1;
let number = number1 < number2 && number2 != number1;
console.log(number);//true + true = true