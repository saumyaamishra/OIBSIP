let finalUnit;

function CalcTemp() {
    var temp1 = Number(document.getElementById("temp1").value);
    //calculate
    var temp1Unit = document.getElementById("temp1Unit").value; 
    var temp2Unit = document.getElementById("temp2Unit").value;
    var res = Number(document.getElementById("result").value);
    var celTemp = Number(celciusTemp(temp1Unit, temp1));
    res = Number(finalTemp(temp2Unit, celTemp)).toFixed(3);
    document.getElementById("result").innerHTML = res + " " + finalUnit;
}

function celciusTemp(Unit_Temp1, temp1) {
    var celTemp = 0;
    switch (Unit_Temp1) {
        case "celcius":
            celTemp = temp1;
            break;
        case "farhen":
            celTemp = (temp1 - 32) * 5/9;
            break;
        case "kelvin":
            celTemp = temp1 - 273.15;
            break;
    }
    return celTemp;
}

function finalTemp(Unit_Temp2, celTemp) {
    var result = 0;
    switch (Unit_Temp2) {
        case "celcius":
            result = celTemp;
            finalUnit = "°C";
            break;
        case "farhen":
            result = (celTemp * 1.8) + 32;
            finalUnit = "°F";
            break;
        case "kelvin":
            result = celTemp + 273.15;
            finalUnit = "K";
            break;
    } 
    return result;
}