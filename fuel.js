function displayFuel() {
  let fuelSelect = document.getElementById('fuel').value;
  let input = parseFloat(document.getElementById('FuelInput').value) || 0;
  let resultsHTML = "<h3>Results:</h3>";
  let jeta = 6.7; 
  let avgas = 6.0; 

  if (fuelSelect === "jet1") { 
    let result = input * 3.78541;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Gallons = ${result} Liters</p>`;

  } else if (fuelSelect === "jet2") { 
    let result = input * jeta;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Gallons = ${result} Pounds</p>`;

  } else if (fuelSelect === "jet3") { 
    let result = input / 0.804; 
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Kg = ${result} Liters</p>`;

  } else if (fuelSelect === "jet4") { 
    let result = input * 2.20462;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Kg = ${result} Pounds</p>`;

  } else if (fuelSelect === "jet5") {
    let result = input * 0.804;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Liters = ${result} Kg</p>`;

  } else if (fuelSelect === "jet6") { 
    let result = input / 3.78541;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Liters = ${result} Gallons</p>`;

  } else if (fuelSelect === "jet7") { 
    let result = input / jeta;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Pounds = ${result} Gallons</p>`;

  } else if (fuelSelect === "jet8") { 
    let result = input / 2.20462;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Pounds = ${result} Kg</p>`;

  
  } else if (fuelSelect === "galtolit") { 
    let result = input * 3.78541;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Gallons = ${result} Liters</p>`;

  } else if (fuelSelect === "galtolbs") { 
    let result = input * avgas;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Gallons = ${result} Pounds</p>`;

  } else if (fuelSelect === "kgtolit") { 
    let result = input / 0.72;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Kg = ${result} Liters</p>`;

  } else if (fuelSelect === "kgtolbs") { 
    let result = input * 2.20462;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Kg = ${result} Pounds</p>`;

  } else if (fuelSelect === "littokg") { 
    let result = input * 0.72;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Liters = ${result} Kg</p>`;

  } else if (fuelSelect === "littogallon") { 
    let result = input / 3.78541;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Liters = ${result} Gallons</p>`;

  } else if (fuelSelect === "lbstogal") { 
    let result = input / avgas;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Pounds = ${result} Gallons</p>`;

  } else if (fuelSelect === "lbstokg") {
    let result = input / 2.20462;
    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Pounds = ${result} Kg</p>`;
  }

  document.getElementById("fuelResults").innerHTML = resultsHTML;
}
