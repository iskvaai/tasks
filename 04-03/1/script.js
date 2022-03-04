/*
1) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 99. Программа должна подсчитать, сколько чисел было введено с клавиатуры
(не считая значения 99) и вывести эту информацию на экран.
    ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4
*/

let btnStart = document.getElementById('start1');
let btnResult = document.getElementById('result1');

let k;
sum = 0;
let s;

let project1 = () => {
    s = prompt('Введите число:');
    while (s != 99) {
        sum ++;
        s = prompt('Введите число:');
    }
}
btnStart.onclick = project1;
btnResult.onclick = () =>{
    alert(`Количество чисел - ${sum}`);
}

/*2) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 999. Программа должна подсчитать, сколько чисел было введено с клавиатуры,
    чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию
на экран.
    ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290*/

let btnStart2 = document.getElementById('start2');
let btnResult2 = document.getElementById('result2');

let f;
let sum1 = 0;
let d = 0;
let project2 = () => {
    f = prompt('Введите число:');
    while (f != 999) {
         sum1 += f
        console.log(sum1)
        d++
        f = prompt('Введите число:')
    }
}
btnStart2.onclick = project2 ;
btnResult2.onclick = () =>{
    alert(`Количество чисел -  ${d}`);
    alert(`Cумма =  ${sum1}`);
}

/*
3) Составьте программу, которая принимает с клавиатуры два целых числа, первое из которых - год рождения ученика,
    а второе – нынешний (текущий) год.
    Программа должна вывести на экран возраст ученика (в целых годах).
ввод: 2006, 2018 ⇒ вывод: вам 12 лет)*/

let date = new Date;

let getTheDateResult = () =>{
    let years = prompt('Введите свой год рождения')
    let dateResult = date.getYear() - num(years)
    return dateResult;
}

alert(`Вам ${getTheDateResult()} лет`)
