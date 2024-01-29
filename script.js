'use strict';

window.addEventListener('load', () => {
    //Här kickar ni igång ert program
    console.log('Window loaded');
});

validateNotAfraid()

//tar input med id 'question'
const checkbox = document.querySelector('#question');

const notAfraidGhosts = true;
console.log(notAfraidGhosts);


//lägg til händelse
checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        console.log('Spelare är inte rädd');
    } else {
        console.log('Spelare är rädd');
    }
});