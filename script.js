// users.js innehåller användardata

// Funktion för att logga in
function login() {
    try {
        const usernameInput = prompt("Ange användarnamn:");
        const passwordInput = prompt("Ange lösenord:");

        // Kontrollera användaren och lösenordet
        if (checkCredentials(usernameInput, passwordInput)) {
            alert("Inloggning lyckades! Spelet startar nu.");
            startGame();
        } else {
            alert("Fel användarnamn eller lösenord. Försök igen.");
            login(); // Återupprepa inloggningen vid felaktiga uppgifter
        }
    } catch (error) {
        console.error("Ett fel inträffade vid inloggning:", error.message);
    }
}

// Funktion för att kontrollera användaruppgifter
function checkCredentials(username, password) {
    // Implementera logik för att kontrollera användaren mot "databasen"
    // Returnera true om användaren finns och är redo att spela, annars false
}

// Anropa inloggningsfunktionen för att starta spelet
login();