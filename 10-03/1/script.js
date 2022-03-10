let counter = 0;
let seconds = 0;
let appendCounters = document.getElementById("counter")
let appendSeconds = document.getElementById("seconds")

 let buttonStart = document.getElementById('button-start')
 let buttonStop = document.getElementById('button-stop')
 let buttonReset = document.getElementById('button-reset')
 let interval;

function startTimer() {
    counter++;

    if (counter < 9){
        appendCounters.innerHTML = '0' + counter;
    }
    if (counter > 9){
        appendCounters.innerHTML = counter;
    }
    if (counter > 99){
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        counter = 0;
        appendCounters.innerHTML = seconds;
    }
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;

    }
}

buttonStart.onclick = function () {
    interval = setInterval(startTimer);
};
buttonStop.onclick = function () {
    clearInterval(interval);
}
 buttonReset.onclick = function () {
     clearInterval(interval);
     counter = "00";
     seconds = "00";
     appendSeconds.innerHTML = seconds;
     appendCounters.innerHTML = counter;
 }