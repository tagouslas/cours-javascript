let messageGlobal; // globale

function showMessage() {
    let messageLocal = "Mon message locale."; // locale

    messageGlobal = "Mon message globale."; // globale

    console.log(messageLocal);
}

showMessage();
console.log(messageGlobal);