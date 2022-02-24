/*1) Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.
*/
let userSalaries = {
    Ella: '10000',
    Sophia:'2000',
    Ellie:'3000'
}
alert(userSalaries["Ella"] + ',' + userSalaries["Sophia"])
/*alert(userSalaries["Ella"]);
alert(userSalaries["Sophia"]);*/

// может быть и по другому , но всё  получилось  кажется /~\


/*2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
// Найдите сумму его элементов.*/


let user = {
    a: 5 ,
    b: 6 ,
    c:10
};
console.log(user["a"]+user['b']+user["c"])


/**************** 3 ********************/
/*
3) let number;
if(data === true){
    number = 3;
} else{
    number = 5;
}
Сделайте рефакторинг кода, с помощью тернарного оператора.*/
//let result = условие ? значение1 : значение2; (ДЛЯ СЕБЯ)


let data = true;
let number = data === true ? 3: 5;
console.log(number);

/************* 4 ***************/
/*
Используя конструкцию if..else, напишите код, который будет спрашивать: «Кто такой В.В.ПУТИН?».

Если посетитель вводит «Президент», то выводить «Верно!», если что-то другое – выводить «Не знаете?».*/

let response = prompt('«Кто такой В.В.ПУТИН?»', '');

if ( response == 'Президент') {
    alert( 'Верно!' );
} else  {
    alert("Не знаете? ");
}
