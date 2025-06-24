function displayMetric() {
  let inches = document.getElementById("inch").value || 0;
  const conversion = inches*25.4

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += "<p>"+ conversion.toFixed(2) + " MM</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}
