/*1) Напишите функцию showNotification(options), которая создаёт уведомление:
 <div class="notification"> с заданным содержимым.
Уведомление должно автоматически исчезнуть через 1,5 секунды.
 Пример объекта options:
//показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
html: "Hello!",      // HTML-уведомление
className: "welcome" // дополнительный класс для div (необязательно) });*/


function showNotification(options) {

    let notification = document.createElement('div');//Создаёт новый элемент с заданным тегом:
    notification.className = "notification";
    //Мы создали элемент, но пока он только в переменной. Мы не можем
    // видеть его на странице, поскольку он не является частью документа.

    notification.innerHTML = "Hello!" + u++ ;
    document.body.appendChild(notification); //Чтобы  div появился

    setTimeout(function() {
        document.body.removeChild(notification);//Метод appendChild позволяет вставить в конец какого-либо другой элемент.
    }, 1500);  //исчезает

}
let u = 1;
setInterval(function() {//запускаем выполнение части кода через указанный промежуток времени.
    showNotification({
    });
}, 2000);
//setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

