
function displayVolume() {
  let volumeSelect = document.getElementById('volume').value;
  let input = parseFloat(document.getElementById('VolumeInput').value) || 0;
  let resultsHTML = "<h3>Results:</h3>";

  if (volumeSelect === "imp1") { 
    let result = input / 2;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Cup = ${formattedResult} Pints</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Cups = ${formattedResult} Pints</p>`;
    }

  } else if (volumeSelect === "imp2") { 
    let result = input / 16;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(4);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Cup = ${formattedResult} Gallons</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Cups = ${formattedResult} Gallons</p>`;
    }

  } else if (volumeSelect === "imp3") { 
    let result = input / 4;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Cup = ${formattedResult} Quarts</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Cups = ${formattedResult} Quarts</p>`;
    }

  } else if (volumeSelect === "imp4") { 
    let result = input * 16;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Gallon = ${formattedResult} Cups</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Gallons = ${formattedResult} Cups</p>`;
    }

  } else if (volumeSelect === "imp5") { 
    let result = input * 8;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Gallon = ${formattedResult} Pints</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Gallons = ${formattedResult} Pints</p>`;
    }

  } else if (volumeSelect === "imp6") { 
    let result = input * 4;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Gallon = ${formattedResult} Quarts</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Gallons = ${formattedResult} Quarts</p>`;
    }

  } else if (volumeSelect === "imp7") { 
    let result = input * 2;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Pint = ${formattedResult} Cups</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Pints = ${formattedResult} Cups</p>`;
    }

  } else if (volumeSelect === "imp8") { 
    let result = input / 8;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(4);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Pint = ${formattedResult} Gallons</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Pints = ${formattedResult} Gallons</p>`;
    }

  } else if (volumeSelect === "imp9") { 
    let result = input / 2;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Pint = ${formattedResult} Quarts</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Pints = ${formattedResult} Quarts</p>`;
    }

  } else if (volumeSelect === "imp0") { 
    let result = input * 4;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Quart = ${formattedResult} Cups</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Quarts = ${formattedResult} Cups</p>`;
    }

  } else if (volumeSelect === "imp10") { 
    let result = input / 4;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Quart = ${formattedResult} Gallons</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Quarts = ${formattedResult} Gallons</p>`;
    }

  } else if (volumeSelect === "imp11") { 
    let result = input * 2;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Quart = ${formattedResult} Pints</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Quarts = ${formattedResult} Pints</p>`;
    }

  } else if (volumeSelect === "imp12") {
    let result = input * 3;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Tablespoon = ${formattedResult} Teaspoons</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Tablespoons = ${formattedResult} Teaspoons</p>`;
    }

  } else if (volumeSelect === "imp13") { 
    let result = input / 3;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    if (input === 1) {
      resultsHTML += `<p>1 Teaspoon = ${formattedResult} Tablespoons</p>`;
    } else {
      resultsHTML += `<p>${formattedInput} Teaspoons = ${formattedResult} Tablespoons</p>`;
    }

 
  } else if (volumeSelect === "metric1") {
    let result = input * 29.5735;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Fluid Ounces = ${formattedResult} Milliliters</p>`;

  } else if (volumeSelect === "metric2") {
    let result = input * 1000;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Liters = ${formattedResult} Milliliters</p>`;

  } else if (volumeSelect === "metric3") { 
    let result = input / 29.5735;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Milliliters = ${formattedResult} Fluid Ounces</p>`;

  } else if (volumeSelect === "metric4") { 
    let result = input / 1000;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Milliliters = ${formattedResult} Liters</p>`;

  } else if (volumeSelect === "metric5") { 
    let result = input / 14.7868;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Milliliters = ${formattedResult} Tablespoons</p>`;

  } else if (volumeSelect === "metric6") { 
    let result = input / 4.92892;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Milliliters = ${formattedResult} Teaspoons</p>`;

  } else if (volumeSelect === "metric7") { 
    let result = input * 14.7868;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Tablespoons = ${formattedResult} Milliliters</p>`;

  } else if (volumeSelect === "metric8") { 
    let result = input * 4.92892;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Teaspoons = ${formattedResult} Milliliters</p>`;

  
  } else if (volumeSelect === "other1") { 
    let result = input / 28316.8;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else {
      result = result.toExponential(3);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Cubic Centimeters = ${formattedResult} Cubic Feet</p>`;

  } else if (volumeSelect === "other2") { 
    let result = input / 16.3871;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Cubic Centimeters = ${formattedResult} Cubic Inches</p>`;

  } else if (volumeSelect === "other3") { 
    let result = input * 28316.8;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Cubic Feet = ${formattedResult} Cubic Centimeters</p>`;

  } else if (volumeSelect === "other4") { 
    let result = input * 1728;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Cubic Feet = ${formattedResult} Cubic Inches</p>`;

  } else if (volumeSelect === "other5") { 
    let result = input * 16.3871;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Cubic Inches = ${formattedResult} Cubic Centimeters</p>`;

  } else if (volumeSelect === "other6") { 
    let result = input / 1728;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(6);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Cubic Inches = ${formattedResult} Cubic Feet</p>`;

  } else if (volumeSelect === "other7") { 
    let result = input * 4.54609;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Gallons (UK) = ${formattedResult} Liters</p>`;

  } else if (volumeSelect === "other8") { 
    let result = input * 3.78541;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Gallons (US) = ${formattedResult} Liters</p>`;

  } else if (volumeSelect === "other9") { 
    let result = input / 4.54609;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Liters = ${formattedResult} Gallons (UK)</p>`;

  } else if (volumeSelect === "other0") { 
    let result = input / 3.78541;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = result >= 1000 ? parseFloat(result).toLocaleString() : result;
    resultsHTML += `<p>${formattedInput} Liters = ${formattedResult} Gallons (US)</p>`;
  }

  document.getElementById("volumeResults").innerHTML = resultsHTML;
}
