
// Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
// значение 99. Программа должна подсчитать, сколько чисел было введено с клавиатуры
// (не считая значения 99) и вывести эту информацию на экран.
//  ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4

let btnStart  = document.getElementById('start1');
let btnResult = document.getElementById('result1');

let s;
sum1 = 0;

let pr = () => {
    s = prompt('Введите число');
    while( s != 99){
        sum1 ++;
        s = prompt('Введите число');
    }
}
btnStart.onclick = pr;
btnResult.onclick = () => {
    alert(`количество чисел - ${sum1}`)};


// 2) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
// значение 999. Программа должна подсчитать, сколько чисел было введено с клавиатуры,
//  чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию
// на экран.
// ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290

let btnStart2  = document.getElementById('start2');
let btnResult2 = document.getElementById('result2');

let a;
let sum = 0;
let k = 0;

let pr2 = () => {
    a = prompt('Введите число');
    while (a != 999) {
        sum = sum + Number(a);
        k++
        a = prompt('Введите число')
    }
}
btnStart2.onclick = pr2;
btnResult2.onclick = () =>{
    alert(`Количество чисел - ${k}`)
    alert(`Сумма = ${sum}`);
}


// Составьте программу, которая принимает с клавиатуры два целых числа, первое из которых - год рождения ученика,
//  а второе – нынешний (текущий) год.
//  Программа должна вывести на экран возраст ученика (в целых годах).
// ввод: 2006, 2018 ⇒ вывод: вам 12 лет)

let a1;
let b;
a1 = prompt('Введите свой год рождения');
b = prompt('Введите текущий год');
let c = a1-b;
alert([`Вам ${c} лет`]);

