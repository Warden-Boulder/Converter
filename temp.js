function FtoC() {
  let f = parseFloat(document.getElementById('tempInput').value) || 0;
  const c = (f - 32) * (5/9);

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${f}°F = `+ c.toFixed(2) + "°C</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function CtoF() {
  let c = parseFloat(document.getElementById('tempInput').value) || 0;
  const f = (c * 9/5) + 32;
  
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${c}°C = `+ f.toFixed(2) + "°F</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function displayTemp() {
  let tempSelect = document.getElementById('temp').value;
  if (tempSelect === "fair") {
    FtoC();
  } else if (tempSelect === "cell") {
    CtoF();
  }
}