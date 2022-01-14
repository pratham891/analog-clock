setInterval(setClock, 1000);

const secondHand = document.querySelector('[second-hand]');
const minuteHand = document.querySelector('[minute-hand]');
const hourHand = document.querySelector('[hour-hand]');

function setClock () {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60;
    const minutesRatio = currentDate.getMinutes()/60;
    const hoursRatio = currentDate.getHours()/12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio*360);
}

setClock();

