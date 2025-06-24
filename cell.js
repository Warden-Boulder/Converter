function displayTemp() {
  let cell = document.getElementById("cell").value || 0;
  const conversion = (cell*1.8)+32

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${cell}°c = `+ conversion.toFixed(2) + "  °f</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}
