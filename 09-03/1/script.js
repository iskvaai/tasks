let button = document.querySelector('#open-modal');
let notification = document.querySelector('#modal');

const showNotification = ({className}) => {
    notification.classList.add(className);
    setTimeout(hideNotification,1500);
    notification.classList.add('d-block');
    notification.style.width = '600px';        //1
    notification.style.backgroundColor = '#D3E1FC';
    notification.style.color = '#084298';
    notification.style.borderColor = '#b6d4fe'
    notification.textContent = 'A simple primary alert—check it out!';
}

button.addEventListener('click',() => {
    showNotification({className:'Welcome'});
});

const hideNotification = () => {
    notification.classList.remove('d-block');
}
/*

2)
    notification.style.backgroundColor = '#e2e3e5';
    notification.style.color = '#41464b';
    notification.style.borderColor = '#d3d6d8'
    notification.textContent = 'A simple secondary alert—check it out!';

3)
    notification.style.backgroundColor = '#d1e7dd';
    notification.style.color = '#0f5132';
    notification.style.borderColor = '#badbcc'
    notification.textContent = 'A simple success alert—check it out!';

4)
    notification.style.backgroundColor = '#f8d7da';
    notification.style.color = '#842029';
    notification.style.borderColor = '#f5c2c7'
    notification.textContent = 'A simple danger alert—check it out!';

5)  
    notification.style.backgroundColor = '#fff3cd';
    notification.style.color = '#664d03';
    notification.style.borderColor = '#ffecb5'
    notification.textContent = 'A simple warning alert—check it out!';

6)
    notification.style.backgroundColor = '#cff4fc';
    notification.style.color = '#055160';
    notification.style.borderColor = '#b6effb'
    notification.textContent = 'A simple info alert—check it out!';

7)
    notification.style.backgroundColor = '#fefefe';
    notification.style.color = '#636464';
    notification.style.borderColor = '#fdfdfe'
    notification.textContent = 'A simple light alert—check it out!';

8)
    notification.style.backgroundColor = '#d3d3d4';
    notification.style.color = '#141619';
    notification.style.borderColor = '#bcbebf'
    notification.textContent = 'A simple dark alert—check it out!';  */