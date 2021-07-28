let pText = document.getElementById("pText");

function changeColor(){

    if (pText.style.color == "blue") {
        pText.style.color = "initial";
    } else {
        pText.style.color = "blue";
    }
}

function changeTextBold(){

    if (pText.style.fontWeight == "bold") {
        pText.style.fontWeight = "initial";
    } else {
        pText.style.fontWeight = "bold";
    }
    }

function changeUp(){

    if (pText.style.fontSize == "120%") {
        pText.style.fontSize = "initial";
    } else {
        pText.style.fontSize = "120%";
    }
}