/*1) Дан массив с элементами [2, 3, 4, 5, 6, 7].
    С помощью цикла for найдите произведение элементов этого массива.
    Общий результат сохранить в объекте с соответствующим свойством.
    Например: 2 * 3 = 6 -> 6 * 4 и.т.д.*/
//1.1 с помощью for

let arr = [2, 3, 4, 5, 6, 7];
let sum = 1;
for (let i = 0; i <arr.length; i++){
   let result = sum *= arr[i];
}

let object ={
    result:sum
}
console.log(object.result);


/*
//1.2 reduce
let arr = [2, 3, 4, 5, 6, 7];
let sum = arr.reduce((sum, currentValue)=>{
    return  sum * currentValue;
}, 1)

let object= {
   result: sum

}
console.log(object.result);
*/


/*2) Напишите функцию, которая заполняет новый массив предоставленным значением
и затем ее возвращает. Функция должна первым параметром принимать
элемент (значение для массива), вторым параметром размер массива.
    Например: myFunc('a', 3)   // ['a', 'a', 'a']*/

/*function myFunc( n1, value ) {
    let arr = [];
    for(n1 ; n1 > 0; n1--) {
        arr.push(value);
    }
    return arr;
}
console.log(myFunc(3, 'a'));*/

//с помощью FILL
// метод fill() изменяет существующий массив, а не возвращает новый.
//Метод fill нужен для заполнения массивов одинаковыми значениями
function fill(n1, size) {
    const arr1 = [];
    for (let i = 0; i < size; i++) {
        arr1[i] = n1;
    }
    return arr1;
}
console.log(fill('a', 3))

/*
3) Напишите функцию, которая разворачивает массив в обратном порядке
и затем ее возвращает.  Функция наша  принимает массив любых элементов.
    Например:
const data = [1, 2, 3];
myFunc(data);  // [3, 2, 1];*/


const data = [1, 2, 3];
function MyFunc1(data) {
 return data;
}
console.log(MyFunc1(data).reverse());
