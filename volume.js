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
    if (input === 1) {
      resultsHTML += `<p>1 Cup = ${result} Pints</p>`;
    } else {
      resultsHTML += `<p>${input} Cups = ${result} Pints</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Cup = ${result} Gallons</p>`;
    } else {
      resultsHTML += `<p>${input} Cups = ${result} Gallons</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Cup = ${result} Quarts</p>`;
    } else {
      resultsHTML += `<p>${input} Cups = ${result} Quarts</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Gallon = ${result} Cups</p>`;
    } else {
      resultsHTML += `<p>${input} Gallons = ${result} Cups</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Gallon = ${result} Pints</p>`;
    } else {
      resultsHTML += `<p>${input} Gallons = ${result} Pints</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Gallon = ${result} Quarts</p>`;
    } else {
      resultsHTML += `<p>${input} Gallons = ${result} Quarts</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Pint = ${result} Cups</p>`;
    } else {
      resultsHTML += `<p>${input} Pints = ${result} Cups</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Pint = ${result} Gallons</p>`;
    } else {
      resultsHTML += `<p>${input} Pints = ${result} Gallons</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Pint = ${result} Quarts</p>`;
    } else {
      resultsHTML += `<p>${input} Pints = ${result} Quarts</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Quart = ${result} Cups</p>`;
    } else {
      resultsHTML += `<p>${input} Quarts = ${result} Cups</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Quart = ${result} Gallons</p>`;
    } else {
      resultsHTML += `<p>${input} Quarts = ${result} Gallons</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Quart = ${result} Pints</p>`;
    } else {
      resultsHTML += `<p>${input} Quarts = ${result} Pints</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Tablespoon = ${result} Teaspoons</p>`;
    } else {
      resultsHTML += `<p>${input} Tablespoons = ${result} Teaspoons</p>`;
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
    if (input === 1) {
      resultsHTML += `<p>1 Teaspoon = ${result} Tablespoons</p>`;
    } else {
      resultsHTML += `<p>${input} Teaspoons = ${result} Tablespoons</p>`;
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
    resultsHTML += `<p>${input} Fluid Ounces = ${result} Milliliters</p>`;

  } else if (volumeSelect === "metric2") {
    let result = input * 1000;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Liters = ${result} Milliliters</p>`;

  } else if (volumeSelect === "metric3") { 
    let result = input / 29.5735;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    resultsHTML += `<p>${input} Milliliters = ${result} Fluid Ounces</p>`;

  } else if (volumeSelect === "metric4") { 
    let result = input / 1000;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    resultsHTML += `<p>${input} Milliliters = ${result} Liters</p>`;

  } else if (volumeSelect === "metric5") { 
    let result = input / 14.7868;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    resultsHTML += `<p>${input} Milliliters = ${result} Tablespoons</p>`;

  } else if (volumeSelect === "metric6") { 
    let result = input / 4.92892;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    resultsHTML += `<p>${input} Milliliters = ${result} Teaspoons</p>`;

  } else if (volumeSelect === "metric7") { 
    let result = input * 14.7868;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Tablespoons = ${result} Milliliters</p>`;

  } else if (volumeSelect === "metric8") { 
    let result = input * 4.92892;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Teaspoons = ${result} Milliliters</p>`;

  
  } else if (volumeSelect === "other1") { 
    let result = input / 28316.8;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else {
      result = result.toExponential(3);
    }
    resultsHTML += `<p>${input} Cubic Centimeters = ${result} Cubic Feet</p>`;

  } else if (volumeSelect === "other2") { 
    let result = input / 16.3871;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    resultsHTML += `<p>${input} Cubic Centimeters = ${result} Cubic Inches</p>`;

  } else if (volumeSelect === "other3") { 
    let result = input * 28316.8;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Cubic Feet = ${result} Cubic Centimeters</p>`;

  } else if (volumeSelect === "other4") { 
    let result = input * 1728;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Cubic Feet = ${result} Cubic Inches</p>`;

  } else if (volumeSelect === "other5") { 
    let result = input * 16.3871;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Cubic Inches = ${result} Cubic Centimeters</p>`;

  } else if (volumeSelect === "other6") { 
    let result = input / 1728;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(6);
    }
    resultsHTML += `<p>${input} Cubic Inches = ${result} Cubic Feet</p>`;

  } else if (volumeSelect === "other7") { 
    let result = input * 4.54609;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Gallons (UK) = ${result} Liters</p>`;

  } else if (volumeSelect === "other8") { 
    let result = input * 3.78541;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Gallons (US) = ${result} Liters</p>`;

  } else if (volumeSelect === "other9") { 
    let result = input / 4.54609;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    resultsHTML += `<p>${input} Liters = ${result} Gallons (UK)</p>`;

  } else if (volumeSelect === "other0") { 
    let result = input / 3.78541;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(3);
    }
    resultsHTML += `<p>${input} Liters = ${result} Gallons (US)</p>`;
  }

  document.getElementById("results").innerHTML = resultsHTML;
}
