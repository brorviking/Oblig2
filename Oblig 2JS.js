// disButton viser on kanppene er endable eller disable
// controller (ingenting her ennå)

function chooseBar(barNo) {
    if (chosenBar == barNo) {
        chosenBar = "";
        disButton = "disabled";
    }
    else {
        chosenBar = barNo;
        disButton = "";
    }

    updateView();
}

// Dette er en funksjon som gjær at fjerner stolpen, ved bruk av splice "array"

function deleteBar() {
    let barPosition = chosenBar - 1
            numbers.splice(barPosition, 1)
    console.log(chosenBar)
    chosenBar = ""
    updateView();
}

// for å endre verdi på stolpen. -1 for å velge riktig stolpe ref til linje 29. siden det er +1.

function changeBar() {
    if (inputValue > 0 && inputValue < 11) {
        numbers[chosenBar - 1] = inputValue
    } else {
        alert("Velg en verdi fra 1 til 10");
    }
    updateView();
}

// for å legge til en stolpe.

function makeBar() {
    if (numbers.length == 8) {
        alert("Maks antall barer er 8");
        return
    }
    if (inputValue > 0 && inputValue < 11) {
        numbers.push(inputValue)
    } else {
        alert("Velg en verdi fra 1 til 10");
    }

    updateView();
}

