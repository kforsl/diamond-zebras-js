'use strict';

window.addEventListener('load', () => {
    //Här kickar ni igång ert program

});


function initGame() {
    // Döljer Formulär när man loggat in. 
    document.querySelector(`#formDiv`).classList.add(`d-none`);

    // oGameData?? 
    const minGhost = 10;
    const maxGhost = 15;
    // 

    // slumpar ett tal mellan minGhost och maxGhost.
    const escapedGhost = Math.floor(Math.random() * (maxGhost - minGhost + 1) + minGhost)

    // Skapa en section med class gameArea.
    const gameArea = document.createElement(`section`);
    gameArea.classList.add(`gameArea`);
    document.querySelector(`main`).appendChild(gameArea)

    // Genererar Slumpat antal spöken. 
    for (let i = 0; i < escapedGhost; i++) {
        // skapar ett img element 
        const imgRef = document.createElement(`img`);

        // Sätter src och alt text på img element.
        imgRef.src = `../resources/ghost.png`; // oGameData.imgSrc ?? 
        imgRef.alt = `image of a Ghost`; // oGameData.imgAlt ?? 

        // slumpar position på spöken på skärmen.
        imgRef.style.left = `${oGameData.left()}px`
        imgRef.style.top = `${oGameData.top()}px`

        // lägger lyssnare som aktiveras på mouseenter.
        imgRef.addEventListener(`mouseenter`, changeImage)
        // lägger in img i gameArea 
        gameArea.appendChild(imgRef);
    }

}

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

function checkForGameOver() {
    //Här hämtar vi alla bilder på spöken och katter och lägger dem i variablar.
    let ghosts = document.querySelectorAll('img[src="/resources/ghost.png"]');
    let kittens = document.querySelectorAll('img[src="/resources/kitten.png"]');
    //Här kollar vi om längden på ghost och längden på kittens är lika med noll. Om det är sant returnes true annars false.
    // Vid true kommer spelet anropa funktionen gameOver().
    if(ghosts.length === 0 && kittens.length === 0) {
        return true;
    } else {
        return false;
    }
}
