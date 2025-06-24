function displayTemp1() {
  let cell = document.getElementById("cell").value || 0;
  const conversion = (cell*1.8)+32

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${cell}°c = `+ conversion.toFixed(2) + "  °f</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function displayTemp2() {
  let fare = document.getElementById("fare").value || 0;
  const conversion = (fare-32)*(5/9)

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${fare}°f = `+ conversion.toFixed(2) + " °c</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}
