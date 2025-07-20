function displayTemp() {
  let tempSelect = document.getElementById('temp').value;
  let input = parseFloat(document.getElementById('tempInput').value) || 0;
  let resultsHTML = "<h3>Results:</h3>";
  
  if (tempSelect === "FtoC") {
    let f = (input-32)*(5/9);
    if (f % 1 === 0) {
      f = f.toFixed(0);
    } else if ((f*10) % 1 === 0) {
      f = f.toFixed(1);
    } else {
      f = f.toFixed(2);
    }
    resultsHTML += `<p>${input}°F = ${f}°C</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (tempSelect === "CtoF") {
    let c = (input*9/5)+32;
    if (c % 1 === 0) {
      c = c.toFixed(0);
    } else if ((c*10) % 1 === 0) {
      c = c.toFixed(1);
    } else {
      c = c.toFixed(2);
    }
    resultsHTML += `<p>${input}°C = ${c}°F</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (tempSelect === "FtoK") {
    let kelvin = (input-32)*(5/9)+273.15;
    if (kelvin % 1 === 0) {
      kelvin = kelvin.toFixed(0);
    } else if ((kelvin*10) % 1 === 0) {
      kelvin = kelvin.toFixed(1);
    } else {
      kelvin = kelvin.toFixed(2);
    }
    resultsHTML += `<p>${input}°F = ${kelvin} Kelvin</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (tempSelect === "ck") {
    let kelvin = input+273.15; 
    if (kelvin % 1 === 0) {
      kelvin = kelvin.toFixed(0);
    } else if ((kelvin*10) % 1 === 0) {
      kelvin = kelvin.toFixed(1);
    } else {
      kelvin = kelvin.toFixed(2);
    }
    resultsHTML += `<p>${input}°C = ${kelvin} Kelvin</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (tempSelect === "KtoF") {
    let f = (input-273.15)*(9/5)+32;
    if (f % 1 === 0) {
      f = f.toFixed(0);
    } else if ((f*10) % 1 === 0) {
      f = f.toFixed(1);
    } else {
      f = f.toFixed(2);
    }
    resultsHTML += `<p>${input} Kelvin = ${f}°F</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (tempSelect === "KtoC") {
    let c = input-273.15; 
    if (c % 1 === 0) {
      c = c.toFixed(0);
    } else if ((c*10) % 1 === 0) {
      c = c.toFixed(1);
    } else {
      c = c.toFixed(2);
    }
    resultsHTML += `<p>${input} Kelvin = ${c}°C</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  }
}