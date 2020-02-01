const celciusInput = document.querySelector('#celcius > input'); /* link to the inputs in the html*/
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num * 100) / 100; // round the numbers to have max 2 decimals
}

function celciusToFahrenheirAndKelvin() {
    /* this function converts the input value of the celcius into fahrenheit and kelvin degrees*/
    const cTemp = parseFloat(celciusInput.value); // to hold the values as floating numbers 
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp); /* assign and show the fahrenheit value which calculated from celcius input*/
    kelvinInput.value = roundNum(kTemp); /* assign and show the kelvin value which calculated from celcius input*/
}

function fahrenheitToCelciusAndKelvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * (5 / 9);
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndFahrenheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9 / 5 * (kTemp - 273) + 32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}

function main() {
    /* make the program accept inputs as soon as a value input take place*/
    celciusInput.addEventListener('input', celciusToFahrenheirAndKelvin);

    fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);

    kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}
main();