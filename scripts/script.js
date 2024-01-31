'use strict';

window.addEventListener('load', () => {
    //Här kickar ni igång ert program
// Anropa inloggningsfunktionen för att starta spelet
document.querySelector(`#spela`).addEventListener(`click`, login)
});

// Funktion för att logga in
function login(event) {
    event.preventDefault();
    try {
        const usernameInput = document.querySelector('#username').value;
        const passwordInput = document.querySelector('#password').value;

        // Kontrollera användaren och lösenordet
        if (checkCredentials(usernameInput, passwordInput)) {
            console.log("Inloggning lyckades! Spelet startar nu.");
          validateNotAfraid();
            // startGame();
        } else {
            alert("Fel användarnamn eller lösenord. Försök igen.");
        }
    } catch (error) {
        console.error("Ett fel inträffade vid inloggning:", error.message);
    }
}

// Funktion för att kontrollera användaruppgifter
function checkCredentials(username, password) {
    try{
        if(!username || !password) {
            throw new error('Användarnamnet och lösenordet får inte vara tomma.');
        }
        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            throw new Error('Fel användarnamn eller lösenord.');
        }

        return true; // Returnera true om användaren finns och är redo att spela
    } catch (error) {
        console.error('Fel vid inloggning:', error.message);
        return false; // Returnera false om något går fel
    }
}

    
    // Implementera logik för att kontrollera användaren mot "databasen"
    // Returnera true om användaren finns och är redo att spela, annars false








function validateNotAfraid() {
   
    //tar input med id 'question'
    const checkbox = document.querySelector('#question');

    if (checkbox.checked) {
        console.log('Spelare är inte rädd');
        oGameData.src = "/resources/ghost.png";
        oGameData.alt = "Bild på ett spöke"
        initGame()
    } else if (!checkbox.checked) {
        console.log('Spelare är rädd');
        oGameData.src = "/resources/kitten.png";
        oGameData.alt = "Bild på en katt"
        initGame()
    }
}

function initGame() {
    // Döljer Formulär när man loggat in. 
    document.querySelector(`#formDiv`).classList.add(`d-none`);

    const minGhost = 10;
    const maxGhost = 15;

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
        imgRef.src = oGameData.src;
        imgRef.alt = oGameData.alt;

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

    //Här hämtar vi checkboxen för att kunna kolla den senare.
    let notAfraid = document.querySelector('#question');
    //Här kollar vi om checkboxen är ikryssad för då kommer vi jobba med bilder på ett spöke.
    if (notAfraid.checked) {
        //Om bilden som vi för muspekaren över innehåller ghost.png så ändrar vi src till net.png och räknar upp count.
        if (event.target.src.includes("/resources/ghost.png")) {
            event.target.src = "/resources/net.png";
            oGameData.count++;
            //Vi anropar funktionen checkForGameOver för att se om spelet är slut eller inte.
            checkForGameOver();
            //Om bilden som vi för muspekaren över innehåller net.png byter ändrar vi src till ghost.png och räknar upp
        } else if (event.target.src.includes("/resources/net.png")) {
            oGameData.count++;
            event.target.src = "/resources/ghost.png";
        }
        // Om checkboxen INTE är ikryssad jobbar vi med bilder på en katt.
    } else if (!notAfraid.checked) {
        //Om bilden som vi för muspekaren över innehåller kitten.png så ändrar vi src till net.png och räknar upp count.
        if (event.target.src.includes("/resources/kitten.png")) {
            event.target.src = "/resources/net.png";
            oGameData.count++;
            checkForGameOver();
            //Om bilden som vi för muspekaren över innehåller net.png så ändrar vi src till kitten.png och räknar upp count.
        } else if (event.target.src.includes("/resources/net.png")) {
            event.target.src = "/resources/kitten.png";
            oGameData.count++;
        }
    }
    //Vi anropar funktionen checkForGameOver för att se om alla bilder är nät eller inte. Är de det så anropas funktionen gameOver.
    if (checkForGameOver()) {
        gameOver();
    }
}

function checkForGameOver() {
    //Här hämtar vi alla bilder på spöken och katter och lägger dem i variablar.
    let ghosts = document.querySelectorAll('img[src="/resources/ghost.png"]');
    let kittens = document.querySelectorAll('img[src="/resources/kitten.png"]');
    //Här kollar vi om längden på ghost och längden på kittens är lika med noll. Om det är sant returnes true annars false.
    // Vid true kommer spelet anropa funktionen gameOver().
    if (ghosts.length === 0 && kittens.length === 0) {
        return true;
    } else {
        return false;
    }
}

function gameOver() {
    console.log('Du klarade spelet på ' + oGameData.count + 'försök');
    // document.querySelector(`#formDiv`).classList.remove(`d-none`);
    document.querySelector(`.gameArea`).remove();
    const logoutPage = document.createElement(`section`);
    logoutPage.classList.add(`logoutPage`);
    document.querySelector(`main`).appendChild(logoutPage)
    const winnerMessage = document.createElement(`h1`);
    winnerMessage.textContent = `Du klarade spelet på ${oGameData.count} försök! Vill du spela igen eller logga ut?`
    const btnPlayAgain = document.createElement(`button`);
    btnPlayAgain.textContent = `Spela igen`
    const btnLogout = document.createElement(`button`);
    btnLogout.textContent = `Logga ut`
    logoutPage.appendChild(winnerMessage);
    logoutPage.appendChild(btnPlayAgain);
    logoutPage.appendChild(btnLogout);

    btnPlayAgain.addEventListener(`click`, () => {
        document.querySelector(`.logoutPage`).remove();
        oGameData.count = 0;
        initGame();
    });

    btnLogout.addEventListener(`click`, () => {
        document.querySelector(`.logoutPage`).remove();
        document.querySelector('#question').checked = false;
        document.querySelector(`#formDiv`).classList.remove(`d-none`);
    });
}
