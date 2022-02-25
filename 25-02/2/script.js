let ques = prompt ('Кто пришел?');
if (ques === 'Админ') {

    let password = prompt('Пароль?');

    if (password === 'Черный властелин') {
        alert( 'Добро пожаловать!' );
    } else if (password === null) {
        alert( 'Вход отменен' );
    } else {
        alert( 'Пароль неверен' );
    }
} else if(ques === null) {
    alert('Вход отменен');
} else {
    alert ('Я вас не знаю');
}
