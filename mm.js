function displayImperial() {
  let mm = document.getElementById("mm").value || 0;
  const conversion = mm/25.4

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += "<p>"+ conversion.toFixed(2) + " inches</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}
