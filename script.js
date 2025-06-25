function convertTemp() {
  const input = parseFloat(document.getElementById("tempInput").value);
  const from = document.getElementById("unitFrom").value;
  const to = document.getElementById("unitTo").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(input)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let celsius;

  // Convert input to Celsius first
  if (from === "celsius") {
    celsius = input;
  } else if (from === "fahrenheit") {
    celsius = (input - 32) * (5 / 9);
  } else if (from === "kelvin") {
    celsius = input - 273.15;
  }

  let result;

  // Convert from Celsius to target unit
  if (to === "celsius") {
    result = celsius;
  } else if (to === "fahrenheit") {
    result = (celsius * 9/5) + 32;
  } else if (to === "kelvin") {
    result = celsius + 273.15;
  }

  resultDiv.textContent = `${input} ${capitalize(from)} = ${result.toFixed(2)} ${capitalize(to)}`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// Dark Mode Toggle Logic
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});
