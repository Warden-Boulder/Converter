function LbstoKilo() {
  let lbs = document.getElementById("input2").value || 0;
  const kilo = parseFloat(lbs)*0.45359237

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${lbs} lbs = `+ kilo.toFixed(2) + "  kilo(s)</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function KilotoLbs() {
  let kilo = document.getElementById("input2").value || 0;
  const lbs = parseFloat(kilo)*2.2

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${kilo} kilo(s) = `+ lbs.toFixed(2) + " lbs</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function displayMass() {
  let massSelect = document.getElementById("mass").value;
  if (massSelect === "lbs") {
   LbstoKilo();
  } else if (massSelect === "kilo") {
    KilotoLbs();
  }
}