function displayEP() {
  let energySelect = document.getElementById("energy").value;
  let input = parseFloat(document.getElementById('EPInput').value) || 0;
  let resultsHTML = "<h3>Results:</h3>";

  if (energySelect === "btu") { 
    let result = input * 1055.06;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} BTU = ${result} Joules</p>`;

  } else if (energySelect === "cal") {
    let result = input * 4.184;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} Calories = ${result} Joules</p>`;

  } else if (energySelect === "electro") {
    let result = input * 1.602176634e-19;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else {
      result = result.toExponential(3);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} eV = ${result} Joules</p>`;

  } else if (energySelect === "jtoBTU") {
    let result = input / 1055.06;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(6);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} Joules = ${result} BTU</p>`;

  } else if (energySelect === "jtocal") {
    let result = input / 4.184;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} Joules = ${result} Calories</p>`;

  } else if (energySelect === "jtoev") {
    let result = input / 1.602176634e-19;
    result = result.toExponential(3);
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} Joules = ${result} eV</p>`;

  } else if (energySelect === "mech") {
    let result = input * 745.7;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} HP (Mechanical) = ${result} Watts</p>`;

  } else if (energySelect === "met") {
    let result = input * 735.5;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} HP (Metric) = ${result} Watts</p>`;

  } else if (energySelect === "kw") {
    let result = input * 1000;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} Kilowatts = ${result} Watts</p>`;

  } else if (energySelect === "wtomech") {
    let result = input / 745.7;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(6);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} Watts = ${result} HP (Mechanical)</p>`;

  } else if (energySelect === "wtomet") {
    let result = input / 735.5;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(6);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} Watts = ${result} HP (Metric)</p>`;

  } else if (energySelect === "wtokw") {
    let result = input / 1000;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(6);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    resultsHTML += `<p>${formattedInput} Watts = ${result} Kilowatts</p>`;
  }

document.getElementById("energyResults").innerHTML = resultsHTML;
}
