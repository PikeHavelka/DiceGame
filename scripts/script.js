var image = document.getElementById("dice-img");
// First Player
var actualScoreFP = document.getElementById("actual-score-fp");
var totalScoreFP = document.getElementById("total-score-fp");
// Second Player
var totalScoreSP = document.getElementById("total-score-sp");
var actualScoreSP = document.getElementById("actual-score-sp");
// Background
// First BG player
var totalFBg = document.getElementById("total-first-bg");
var actualFBg = document.getElementById("actual-first-bg");
// Second BG player
var totalSBg = document.getElementById("total-second-bg");
var actualSBg = document.getElementById("actual-second-bg");
// Off Buttons
var throwDiceOff = document.getElementById("throw-dice");
var holdScoreOff = document.getElementById("hold-score");
var newGameoff = document.getElementById("new-game");
// Default
totalSBg.style.background = "grey";
actualSBg.style.background = "grey";
var player = 1;
changeTitle();
alert("Vítejte ve hře \"Hod kostkou\". Hra je určena pro dva hráče. Zahaj hru, kliknutím na \"Hodit kostkou\" a sleduj čtverec na středu. Kdo dříve dosáhne celkového skóre 100 vyhrál.");
function randomNumber() {
    throwDiceOff.style.pointerEvents = "none";
    holdScoreOff.style.pointerEvents = "none";
    newGameoff.style.pointerEvents = "none";
    throwDiceOff.style.backgroundColor = "grey";
    holdScoreOff.style.backgroundColor = "grey";
    newGameoff.style.backgroundColor = "grey";
    var interval = setInterval(function () {
        var randomIndex = Math.ceil(Math.random() * 6);
        image.src = "/images/".concat(randomIndex, ".jpg");
    }, 300);
    setTimeout(function () {
        var randomIndex = Math.ceil(Math.random() * 6);
        image.src = "/images/".concat(randomIndex, ".jpg");
        throwDiceOff.style.pointerEvents = "visible";
        holdScoreOff.style.pointerEvents = "visible";
        newGameoff.style.pointerEvents = "visible";
        throwDiceOff.style.backgroundColor = "brown";
        holdScoreOff.style.backgroundColor = "brown";
        newGameoff.style.backgroundColor = "brown";
        clearInterval(interval);
        if (player === 1) {
            var actualScore = Number(actualScoreFP.textContent) + randomIndex;
            actualScoreFP.textContent = actualScore.toString();
            // Default values
            if (randomIndex === 1) {
                actualScoreFP.textContent = "0";
                totalFBg.style.background = "grey";
                actualFBg.style.background = "grey";
                totalSBg.style.background = "brown";
                actualSBg.style.background = "brown";
                changeTitle();
                player = 2;
            }
        }
        else if (player === 2) {
            var actualScore = Number(actualScoreSP.textContent) + randomIndex;
            actualScoreSP.textContent = actualScore.toString();
            // Default values
            if (randomIndex === 1) {
                actualScoreSP.textContent = "0";
                totalSBg.style.background = "grey";
                actualSBg.style.background = "grey";
                totalFBg.style.background = "brown";
                actualFBg.style.background = "brown";
                changeTitle();
                player = 1;
            }
        }
    }, 1500);
}
function holdScore() {
    if (player === 1) {
        // Player 1
        var newTotalFP = Number(totalScoreFP.textContent) + Number(actualScoreFP.textContent);
        totalScoreFP.textContent = newTotalFP.toString();
        totalFBg.style.background = "grey";
        actualFBg.style.background = "grey";
        totalSBg.style.background = "brown";
        actualSBg.style.background = "brown";
        setTimeout(function () {
            if (totalScoreFP.textContent >= 100) {
                newGame();
                alert("Hr\u00E1\u010D 1 vyhr\u00E1l!");
            }
        }, 200);
        changeTitle();
        actualScoreFP.textContent = "0";
        player = 2;
    }
    else {
        // Player 2
        var newTotalSP = Number(totalScoreSP.textContent) + Number(actualScoreSP.textContent);
        totalScoreSP.textContent = newTotalSP.toString();
        totalSBg.style.background = "grey";
        actualSBg.style.background = "grey";
        totalFBg.style.background = "brown";
        actualFBg.style.background = "brown";
        setTimeout(function () {
            if (totalScoreSP.textContent >= 100) {
                newGame();
                alert("Hr\u00E1\u010D 2 vyhr\u00E1l!");
            }
        }, 200);
        changeTitle();
        actualScoreSP.textContent = "0";
        player = 1;
    }
    // Default values
    image.src = "/images/empty.jpg";
}
function newGame() {
    // Default values
    totalSBg.style.background = "grey";
    actualSBg.style.background = "grey";
    totalFBg.style.background = "brown";
    actualFBg.style.background = "brown";
    changeTitle();
    player = 1;
    actualScoreFP.textContent = "0";
    totalScoreFP.textContent = "0";
    actualScoreSP.textContent = "0";
    totalScoreSP.textContent = "0";
    image.src = "/images/empty.jpg";
}
function changeTitle() {
    if (totalFBg.style.background === "grey" && actualFBg.style.background === "grey") {
        totalFBg.title = "Neaktnivní hráč je vždy šedý";
        actualFBg.title = "Neaktnivní hráč je vždy šedý";
    }
    else {
        totalFBg.title = "Aktivní hráč je vždy barevný";
        actualFBg.title = "Aktivní hráč je vždy barevný";
    }
    if (totalSBg.style.background === "brown" && actualSBg.style.background === "brown") {
        totalSBg.title = "Aktivní hráč je vždy barevný";
        actualSBg.title = "Aktivní hráč je vždy barevný";
    }
    else {
        totalSBg.title = "Neaktnivní hráč je vždy šedý";
        actualSBg.title = "Neaktnivní hráč je vždy šedý";
    }
}
