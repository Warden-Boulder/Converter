function displayTemp() {
  let fare = document.getElementById("fare").value || 0;
  let conversion = (fare-32)*(5/9)

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${fare}°f = `+ conversion.toFixed(2) + "  °c</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}
