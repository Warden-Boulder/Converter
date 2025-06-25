function MPHtoKnots() {
  let mph = document.getElementById("input3").value || 0;
  const knots = parseFloat(mph)/1.15;

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${mph} MPH = `+ knots.toFixed(2) + " knot(s)</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function KnotstoMPH() {
  let knots = document.getElementById("input3").value || 0;
  const mph = parseFloat(knots)*1.15;

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${knots} knot(s) = `+ mph.toFixed(2) + " MPH</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function displaySpeed() {
  let speedSelect = document.getElementById(`speed`).value;
  if (speedSelect==="mph") {
    MPHtoKnots();
  } else if (speedSelect==="knots") {
    KnotstoMPH();
  }
}