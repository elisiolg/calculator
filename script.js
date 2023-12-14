let currentDisplay = "0";
let resultDisplay = false;

appendToDisplay = (value) => {
    if(currentDisplay === "0" || resultDisplay){
        currentDisplay = value;
    }else{
        currentDisplay += value;
    }

    resultDisplay = false;

    updateDisplay();
}

updateDisplay = () => {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
}

calculateResult = () => {
    try{
        const result = eval(currentDisplay);
        currentDisplay += "\n=" + result.toString();
        updateDisplay();
    }catch{
        currentDisplay += "\nError"
        updateDisplay();
    }

    resultDisplay = true;
}

clearLastElement = () => {
    currentDisplay = currentDisplay.slice(0, -1);

    if (currentDisplay === "") {
      currentDisplay = "0";
    }

    updateDisplay();
}

clearDisplay = () => {
    currentDisplay = "0";
    updateDisplay();
}

window.addEventListener("resize", handleOverflow);

handleOverflow();