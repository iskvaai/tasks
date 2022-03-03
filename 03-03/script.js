/*1) Выводим  2 следующих сообщения после соответствующих задержек.
    Сообщение “Hello after 4 seconds” выводим через 4 секунды.
    Сообщение “Hello after 8 seconds” выводим через 8 секунд.
    В решении нужно определить всего одну функцию, содержащую встроенные функции.
    Это означает, что множество вызовов setTimeout должны будут использовать
одну и ту же функцию.
    Пример вызова:

    setTimeout(func1) => Hello after 4 seconds
setTimeout(func1) => Hello after 8 seconds*/

//с помощью delay
const func1 = delay => {
    console.log('Hello after ' + delay + ' seconds');//DELAY - интервал в миллисекундах (1000 = 1 секунда).
};
setTimeout(func1, 4 * 1000, 4);
setTimeout(func1, 8 * 1000, 8);

//без delay
/*function func1(n1){
    console.log(n1);
}
setTimeout(func1, 4000, 'Hello after 4 seconds');
setTimeout(func1, 8000, 'Hello after 8 seconds');*/

/*
2) Напишите функцию mul(n,m), которая принимает два аргумента и возвращает
произведение этих аргументов.
*/
let mul = (n,m) => n * m;
    console.log(mul(5,5))
/*
3) Создайте функцию и с помощью цикла найдите факториал числа 7:
Название для функции можно дать любую.
    Например при вызове функции factorial с параметром 7 в консоли должно
вывести следующее:

    factorial(7); //1*2*3*4*5*6*7 //5040*/

/*function factorial(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
}//while – это цикл, который выполняется до тех пор, пока указанное условие оценивается как истинное.
console.log(factorial(7));*/



function factorial(n){
    let result = 1;

    for (let i = 1; i <= n; i++){
         result *= i;
           console.log(i + '  ' + result);
    }
     return result;
}
console.log(factorial(7));

