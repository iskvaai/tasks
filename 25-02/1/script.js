/*1) Создайте массив с числами. Перебирая элементы созданного массива с помощью
цикла выведите только те элементы массива, которые больше нуля и меньше 10.*/
let number = [1, 2, 3, -1, -2, 6, 18, 13];
for (let i = 0; i < number.length; i++){
    if (number[i] > 0 && number[i] < 10){
        console.log(number[i]) ;
    }


/*2) У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
С помощью цикла надо найти сумму элементов этого массива.*/
let result = 0;
let array = [ 1, 2, 5, 6, 88, 5];
for (let i = 0; i < array.length; i++){
    result += array[i];
    console.log(result)
}
/*3) Создайте массив с различными числами. Должно быть как минимум 10 элементов
внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива.
    Квадрат числа 5 будет 25.*/
    let arr = [1,2,3,4,5,10,11,14];
    let newarr = [];
    for (let i = 0; i < arr.length; i++ ){
        let result = arr[i] * arr[i];
        newarr.push(result);
        console.log(result)

    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += newarr[i];
    }
    console.log(sum)
}