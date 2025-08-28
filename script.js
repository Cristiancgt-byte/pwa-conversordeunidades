const conversionRates = {
  m: 1,
  km: 0.001,
  mi: 0.000621371,
  ft: 3.28084,
};

function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(inputValue)) {
    resultDiv.textContent = "Por favor, ingresa un número válido.";
    return;
  }

  // Convertir el valor a metros
  const valueInMeters = inputValue / conversionRates[fromUnit];

  // Convertir de metros a la unidad destino
  const convertedValue = valueInMeters * conversionRates[toUnit];

  resultDiv.textContent = `Resultado: ${convertedValue.toFixed(4)} ${toUnit}`;
}
