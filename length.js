function IntoMM(){
  let inches = document.getElementById("input").value || 0;
  const conversion = inches*25.4

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p> ${inches} inch(es) = `+ conversion.toFixed(2) + " MM</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function MMtoIn() {
  let mm = document.getElementById("input").value || 0;
  const conversion = mm/25.4
  
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${mm} MM = ` + conversion.toFixed(2) + " inch(es)</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function displayLength() {
  let lengthSelect = document.getElementById("length").value;
  if (lengthSelect === "in") {
    IntoMM();
  } else if (lengthSelect === "mm") {
    MMtoIn();
  }
}