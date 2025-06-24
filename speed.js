function displayMPH() {
  let knots = document.getElementById("knots").value || 0;
  const conversion = parseFloat(knots)*1.15;

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${knots} knot(s) = `+ conversion.toFixed(2) + " MPH</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function displayKnots() {
  let mph = document.getElementById("mph").value || 0;
  const conversion = parseFloat(mph)/1.15;

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${mph} MPH = `+ conversion.toFixed(2) + " Knot(s)</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}
