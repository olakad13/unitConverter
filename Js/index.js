const convertBtn = document.getElementById("conversion-btn");
const inputNumber = document.getElementById("Number-input");
const outputStreams = document.getElementsByClassName("result");


convertBtn.addEventListener("click", function() {
    let numberToConvert = Number(inputNumber.value);
    outputStreams[0].textContent = `${meterToFeet(numberToConvert)} | ${feetToMeter(numberToConvert)}`;
    outputStreams[1].textContent = `${litresToGallon(numberToConvert)} | ${gallonToLitres(numberToConvert)}`;
    outputStreams[2].textContent = `${kgToPounds(numberToConvert)} | ${poundsToKg(numberToConvert)}`;
})



function meterToFeet(number) {

    return `${number} meters = ${(number * 3.281).toFixed(3)} feet`;

}

function feetToMeter(number) {

    return `${number} feet = ${(number / 3.281).toFixed(3)} meters`;

}


function litresToGallon(number) {

    return `${number} litres = ${(number * 0.264).toFixed(3)} gallons`;

}

function gallonToLitres(number) {

    return `${number} gallons = ${(number / 0.264).toFixed(3)} litres`;

}
 
function kgToPounds(number) {

    return `${number} kg = ${(number * 2.204).toFixed(3)} pounds`;

}

function poundsToKg(number) {

    return `${number} pounds = ${(number * 2.204).toFixed(3)} kg`;

}
