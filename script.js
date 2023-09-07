let input;

function getInput() {
  const inputValue = parseFloat(document.getElementById('input').value);
  if (isNaN(inputValue)) {
    alert('Please enter a valid numeric temperature.');
    return null; // Return null to indicate invalid input
  }
  return inputValue;
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.dropdown-button');
  const dropdownContent = document.querySelector('#dropdownContent'); 

  button.addEventListener('click', function () {
    dropdownContent.style.display =
      dropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-button')) {
      dropdownContent.style.display = 'none';
    }
    if (event.target.matches('input')) {
        setTimeout(() => {
            dropdownContent.style.display = 'block';
        }, 1000);
    }
  });
});

const fromCelsius = document.getElementById('c');
const fromFahrenheit = document.getElementById('f');
const fromKelvin = document.getElementById('k');

let sourceUnit;

fromCelsius.addEventListener('click', () => {
  sourceUnit = 'Celsius';
});

fromKelvin.addEventListener('click', () => {
  sourceUnit = 'Kelvin';
});

fromFahrenheit.addEventListener('click', () => {
  sourceUnit = 'Fahrenheit';
});

const toCelsius = document.getElementById('toC');
const toFahrenheit = document.getElementById('toF');
const toKelvin = document.getElementById('toK');

function convertTemperature(fromUnit, toUnit, temperature) {
  if (fromUnit === 'Celsius') {
    if (toUnit === 'Fahrenheit') {
      return ((temperature * 9) / 5 + 32).toFixed(2);
    } else if (toUnit === 'Kelvin') {
      return (temperature + 273.15).toFixed(2);
    }
  } else if (fromUnit === 'Fahrenheit') {
    if (toUnit === 'Celsius') {
      return (((temperature - 32) * 5) / 9).toFixed(2);
    } else if (toUnit === 'Kelvin') {
      return (((temperature - 32) * 5) / 9 + 273.15).toFixed(2);
    }
  } else if (fromUnit === 'Kelvin') {
    if (toUnit === 'Celsius') {
      return (temperature - 273.15).toFixed(2);
    } else if (toUnit === 'Fahrenheit') {
      return (((temperature - 273.15) * 9) / 5 + 32).toFixed(2);
    }
  }
  return temperature;
}

document.getElementById('result-in').classList.add('gradient-text');


toFahrenheit.addEventListener('click', () => {
  const targetUnit = 'Fahrenheit';
  input = getInput();
  if (input !== null) {
    const convertedTemperature = convertTemperature(sourceUnit, targetUnit, input);
    document.getElementById(
      'result-in'
    ).innerHTML = `The temperature in Fahrenheit is ${convertedTemperature} °F`;
  }
});

toCelsius.addEventListener('click', () => {
  const targetUnit = 'Celsius';
  input = getInput();
  if (input !== null) {
    const convertedTemperature = convertTemperature(sourceUnit, targetUnit, input);
    document.getElementById(
      'result-in'
    ).innerHTML = `The temperature in Celsius is ${convertedTemperature} °C`;
  }
});

toKelvin.addEventListener('click', () => {
  const targetUnit = 'Kelvin';
  input = getInput();
  if (input !== null) {
    const convertedTemperature = convertTemperature(sourceUnit, targetUnit, input);
    document.getElementById(
      'result-in'
    ).innerHTML = `The temperature in Kelvin is ${convertedTemperature} K`;
  }
});

// Initail code with unexppected behaviour
// let input;
// function getInput() {
//   input = document.getElementById('input').value;
//   return input;
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const button = document.querySelector('.dropdown-button');
//   const dropdownContent = document.querySelector('.dropdown-content');

//   button.addEventListener('click', function () {
//     dropdownContent.style.display =
//       dropdownContent.style.display === 'block' ? 'none' : 'block';
//   });

//   window.addEventListener('click', function (event) {
//     if (!event.target.matches('.dropdown-button')) {
//       dropdownContent.style.display = 'none';
//     }
//   });
// });

// const fromCelsius = document.getElementById('c');
// const fromFahrenheit = document.getElementById('f');
// const fromKelvin = document.getElementById('k');

// let tempF, tempC, tempK;
// let c, f, k;

// fromCelsius.addEventListener('click', (event) => {
//   const uniteC = event.target.textContent;
//   c = uniteC;
// });

// fromKelvin.addEventListener('click', (event) => {
//   const uniteK = event.target.textContent;
//   k = uniteK;
// });

// fromFahrenheit.addEventListener('click', (event) => {
//   const uniteF = event.target.textContent;
//   f = uniteF;
// });

// const toCelsius = document.getElementById('toC');
// const toFahrenheit = document.getElementById('toF');
// const toKelvin = document.getElementById('toK');

// toFahrenheit.addEventListener('click', () => {
//   if (c) {
//     tempF = ((9 / 5) * parseFloat(getInput()) + 32).toFixed(2);
//     document.getElementById(
//       'result-in'
//     ).innerHTML = `The temperature in Fahrenheit is ${tempF} °F`;
//   } else if (k) {
//     tempF = (((parseFloat(getInput()) - 273.15) * 9) / 5 + 32).toFixed(2);
//     document.getElementById(
//       'result-in'
//     ).innerHTML = `The temperature in Fahrenheit is ${tempF} °F`;
//   } else {
//     document.getElementById(
//       'result-in'
//     ).innerHTML = `The temperature in Fahrenheit is ${getInput()} °F`;
//   }
//   input = '';
// });

// toCelsius.addEventListener('click', () => {
//   if (f) {
//     tempC = ((5 / 9) * (parseFloat(getInput()) - 32)).toFixed(2);
//     document.getElementById(
//       'result-in'
//     ).innerHTML = `The temperature in Celsius is ${tempC} °C`;
//   } else if (k) {
//     tempC = (parseFloat(getInput()) - 273.15).toFixed(2);
//     document.getElementById(
//       'result-in'
//     ).innerHTML = `The temperature in Celsius is ${tempC} °C`;
//   } else {
//     document.getElementById(
//       'result-in'
//     ).innerHTML = `The temperature in Celsius is ${getInput()} °C`;
//   }
//   input = '';
// });

// toKelvin.addEventListener('click', () => {
//   if (f) {
//     tempK = (((parseFloat(getInput()) - 32) * 5) / 9 + 273.15).toFixed(2);
//     document.getElementById(
//       'result-in'
//     ).innerHTML = `The temperature in kelvin is ${tempK} K`;
//   } else if (c) {
//     tempK = (parseFloat(getInput()) + 273.15).toFixed(2);
//     document.getElementById(
//       'result-in'
//     ).innerHTML = `The temperature in kelvin is ${tempK} K`;
//   } else {
//     document.getElementById(
//       'result-in'
//     ).innerHTML = `The temperature in kelvin is ${getInput()} K`;
//   }
//   input = '';
// });
