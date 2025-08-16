let discount =50; // Beispiel für eine Variable
let price = 500; // Einkommen Beispiel

console.log
console.log(price - discount)*1.19 ; // Ausgabe des Preises nach Abzug des Rabatts

function calculatePrice() {
console.log((price - discount)*1.19) ;

// Variabelen und Funktionen unterscheidet sich
// function dann den namen  (){}
}

// 10 Funktions: parameter // am besten immer genau so viele Parameter - wie nötig
// aber auch nicht zu wenige - Genaue Parameter Anzahl
function logClaculatedPrice(discount,price) {
    console.log((price - discount) * 1.19);
}


// Funktion: Return
console.log(logClaculatedPrice(50,500));

function logClaculatedPrice(discount,price) {
    let value = (price - discount) * 1.19;
    console.log("vor return");

    return value;
    console.log("vor nach return");
// nach Return kommt nichts mehr - die Funktion wird hier beendet
}

// Funktion: Return - gibt etwas zurück
