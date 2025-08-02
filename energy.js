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
    resultsHTML += `<p>${input} BTU = ${result} Joules</p>`;

  } else if (energySelect === "cal") {
    let result = input * 4.184;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Calories = ${result} Joules</p>`;

  } else if (energySelect === "electro") {
    let result = input * 1.602176634e-19;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else {
      result = result.toExponential(3);
    }
    resultsHTML += `<p>${input} eV = ${result} Joules</p>`;

  } else if (energySelect === "jtoBTU") {
    let result = input / 1055.06;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(6);
    }
    resultsHTML += `<p>${input} Joules = ${result} BTU</p>`;

  } else if (energySelect === "jtocal") {
    let result = input / 4.184;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Joules = ${result} Calories</p>`;

  } else if (energySelect === "jtoev") {
    let result = input / 1.602176634e-19;
    result = result.toExponential(3);
    resultsHTML += `<p>${input} Joules = ${result} eV</p>`;

  } else if (energySelect === "mech") {
    let result = input * 745.7;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} HP (Mechanical) = ${result} Watts</p>`;

  } else if (energySelect === "met") {
    let result = input * 735.5;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} HP (Metric) = ${result} Watts</p>`;

  } else if (energySelect === "kw") {
    let result = input * 1000;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }
    resultsHTML += `<p>${input} Kilowatts = ${result} Watts</p>`;

  } else if (energySelect === "wtomech") {
    let result = input / 745.7;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(6);
    }
    resultsHTML += `<p>${input} Watts = ${result} HP (Mechanical)</p>`;

  } else if (energySelect === "wtomet") {
    let result = input / 735.5;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(6);
    }
    resultsHTML += `<p>${input} Watts = ${result} HP (Metric)</p>`;

  } else if (energySelect === "wtokw") {
    let result = input / 1000;
    if (result % 1 === 0) {
      result = result.toFixed(0);
    } else if ((result * 10) % 1 === 0) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(6);
    }
    resultsHTML += `<p>${input} Watts = ${result} Kilowatts</p>`;
  }

document.getElementById("energyResults").innerHTML = resultsHTML;
}
