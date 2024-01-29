'use strict';

window.addEventListener('load', () => {
    //Här kickar ni igång ert program
});

function changeImage(event) {    
    //Här kollar vi om count är undefined. Om den är det får den värdet 0, annars räknas det upp.
    changeImage.count = changeImage.count || 0;

    //Här hämtar vi checkboxen för att kunna kolla den senare.
    let notAfraid = document.querySelector('#question');
    //Här kollar vi om checkboxen är ikryssad för då kommer vi jobba med bilder på ett spöke.
    if(notAfraid.checked) {
        //Om bilden som vi för muspekaren över innehåller ghost.png så ändrar vi src till net.png och räknar upp count.
        if(event.target.src.includes("/resources/ghost.png")){
            event.target.src = "/resources/net.png";
            changeImage.count++;
            //Vi anropar funktionen checkForGameOver för att se om spelet är slut eller inte.
            checkForGameOver();
        //Om bilden som vi för muspekaren över innehåller net.png byter ändrar vi src till ghost.png och räknar upp
        } else if(event.target.src.includes("/resources/net.png")){
            changeImage.count++;
            event.target.src = "/resources/ghost.png";
        }
    // Om checkboxen INTE är ikryssad jobbar vi med bilder på en katt.
    } else if(!notAfraid.checked) {
        //Om bilden som vi för muspekaren över innehåller kitten.png så ändrar vi src till net.png och räknar upp count.
        if(event.target.src.includes("/resources/kitten.png")){
            event.target.src = "/resources/net.png"; 
            changeImage.count++;
            checkForGameOver();
        //Om bilden som vi för muspekaren över innehåller net.png så ändrar vi src till kitten.png och räknar upp count.
        } else if(event.target.src.includes("/resources/net.png")){
            event.target.src = "/resources/kitten.png";
            changeImage.count++;
        }
    } 
    //Vi anropar funktionen checkForGameOver för att se om alla bilder är nät eller inte. Är de det så anropas funktionen gameOver.
    if(checkForGameOver()) {
        gameOver();
    }
}