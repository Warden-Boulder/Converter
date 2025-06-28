function displayTemp() {
  let tempSelect = document.getElementById('temp').value;
  if (tempSelect === "fair") {
    FtoC();
  } else if (tempSelect === "cell") {
    CtoF();
  } else if (tempSelect === "kelvin") {
    FtoK();
  } else if (tempSelect === "ck") {
    CtoK();
  } else if (tempSelect === "kf") {
    KtoF();
  } else {
    KtoC();
  }
}

function CtoF() {
  let c = parseFloat(document.getElementById('tempInput').value) || 0;
  let f = (c * 9/5) + 32;

  if (f % 1 === 0) {
   f = f.toFixed(0);
  } else if ((f*10) % 1 === 0) {
   f = f.toFixed(1);
  } else {
   f = f.toFixed(2);
  }
  
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${c}°C = `+ f+ "°F</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function CtoK() {
  let c = parseFloat(document.getElementById('tempInput').value) || 0;
  let kelvin = c+273.15; 
  
  if (kelvin % 1 === 0) {
   kelvin = kelvin.toFixed(0);
  } else if ((kelvin*10) % 1 === 0) {
   kelvin = kelvin.toFixed(1);
  } else {
   kelvin = kelvin.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${c}°C = `+kelvin+ "°K</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function FtoC() {
  let f = parseFloat(document.getElementById('tempInput').value) || 0;
  let c = (f-32)*(5/9);

  if (c % 1 === 0) {
   c = c.toFixed(0);
  } else if ((c*10) % 1 === 0) {
   c = c.toFixed(1);
  } else {
   c = c.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${f}°F = `+ c + "°C</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function FtoK() {
  let f = parseFloat(document.getElementById('tempInput').value) || 0;
  let kelvin = (f-32)*(5/9)+273.15;

  if (kelvin % 1 === 0) {
   kelvin = kelvin.toFixed(0);
  } else if ((kelvin*10) % 1 === 0) {
   kelvin = kelvin.toFixed(1);
  } else {
   kelvin = kelvin.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${f}°F = `+kelvin+ "Kelvin</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function KtoC() {
  let kelvin = parseFloat(document.getElementById('tempInput').value) || 0;
  let c = kelvin-273.15; 
  
  if (c % 1 === 0) {
   c = c.toFixed(0);
  } else if ((c*10) % 1 === 0) {
   c = c.toFixed(1);
  } else {
   c = c.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${kelvin} Kelvin = `+c+ "°C</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function KtoF() {
  let kelvin = parseFloat(document.getElementById('tempInput').value) || 0;
  let f = (kelvin-273.15)*(9/5)+32

  if (f % 1 === 0) {
   f = f.toFixed(0);
  } else if ((f*10) % 1 === 0) {
   f = f.toFixed(1);
  } else {
   f = f.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${kelvin} Kelvin = `+f+ "°F</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}
