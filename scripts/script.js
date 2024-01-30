'use strict';

window.addEventListener('load', () => {
    //Här kickar ni igång ert program
    initGame()
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

function changeImage() {
    console.log(`changeImage()`)
}


