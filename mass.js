function displayMass() {
  let massSelect = document.getElementById("mass").value;
  if (massSelect === "lbs") {
    toKilo();
  } else if (massSelect === "kilo") {
    toLbs();
  } else if (massSelect === "gram") {
    toOz();
  } else if (massSelect === "ounce") {
    toGram();
  } else if (massSelect === "stone") {
    toKg();
  } else if (massSelect === "kg") {
    toStone();
  } else if (massSelect === "lbs2") {
    toOz2();
  } else if (massSelect === "oz2") {
    toLbs2();
  }
}

function toGram() {
  let oz = document.getElementById("MassInput").value || 0;
  let gram = parseFloat(oz) * 28.3495;

  if (gram.toFixed(2).endsWith('.00')) {
    gram = gram.toFixed(0);
  } else if (gram.toFixed(2).endsWith('0')) {
    gram = gram.toFixed(1);
  } else {
    gram = gram.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (oz == 1) {
     resultsHTML += `<p>${oz} ounce = `+ gram + " grams</p>";
  } else if (gram == 1){
    resultsHTML += `<p>${oz} ounces = `+ gram + " gram</p>";
  } else {
    resultsHTML += `<p>${oz} ounces = `+ gram + " grams</p>";
  }
  document.getElementById("massResults").innerHTML = resultsHTML;
}

function toKg() {
  let stone = document.getElementById("MassInput").value || 0;
  let kg = parseFloat(stone) * 6.35029;

  if (kg.toFixed(2).endsWith('.00')) {
    kg = kg.toFixed(0);
  } else if (kg.toFixed(2).endsWith('0')) {
    kg = kg.toFixed(1);
  } else {
    kg = kg.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (stone == 1) {
     resultsHTML += `<p>${stone} stone = `+ kg + " Kilograms</p>";
  } else if (kg == 1){
    resultsHTML += `<p>${stone} stones = `+ kg + " Kilogram</p>";
  } else {
    resultsHTML += `<p>${stone} stones = `+ kg + " Kilograms</p>";
  }
  document.getElementById("massResults").innerHTML = resultsHTML;
}

function toKilo() {
  let lbs = document.getElementById("MassInput").value || 0;
  let kilo = parseFloat(lbs)*0.453592;

  if (kilo.toFixed(2).endsWith('.00')) {
    kilo = kilo.toFixed(0);
  } else if (kilo.toFixed(2).endsWith('0')) {
    kilo = kilo.toFixed(1);
  } else {
    kilo = kilo.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (kilo == 1) {
     resultsHTML += `<p>${lbs} lbs = `+ kilo + " Kilogram</p>";
  } else if (lbs == 1) {
     resultsHTML += `<p>${lbs} lb = `+ kilo + " Kilograms</p>";
  } else {
    resultsHTML += `<p>${lbs} lbs = `+ kilo + " Kilograms</p>";
  }
  document.getElementById("massResults").innerHTML = resultsHTML;
}

function toLbs() {
  let kilo = document.getElementById("MassInput").value || 0;
  let lbs = parseFloat(kilo)*2.2;

  if (lbs.toFixed(2).endsWith('.00')) {
    lbs = lbs.toFixed(0);
  } else if (lbs.toFixed(2).endsWith('0')) {
    lbs = lbs.toFixed(1);
  } else {
    lbs = lbs.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (kilo == 1) {
     resultsHTML += `<p>${kilo} Kilogram = `+ lbs + " lbs</p>";
  } else if (lbs == 1) {
    resultsHTML += `<p>${kilo} Kilograms = `+ lbs + " lb</p>";
  } else {
    resultsHTML += `<p>${kilo} Kilograms = `+ lbs + " lbs</p>";
  }
  document.getElementById("massResults").innerHTML = resultsHTML;
}

function toLbs2() {
  let oz = document.getElementById("MassInput").value || 0;
  let lbs = parseFloat(oz) / 16;

  if (lbs.toFixed(2).endsWith('.00')) {
    lbs = lbs.toFixed(0);
  } else if (lbs.toFixed(2).endsWith('0')) {
    lbs = lbs.toFixed(1);
  } else {
    lbs = lbs.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (oz == 1) {
     resultsHTML += `<p>${oz} ounce = `+ lbs + " lbs</p>";
  } else if (lbs == 1) {
    resultsHTML += `<p>${oz} ounce = `+ lbs + " lb</p>";
  } else {
    resultsHTML += `<p>${oz} ounces = `+ lbs + " lbs</p>";
  }
  document.getElementById("massResults").innerHTML = resultsHTML;
}

function toOz() {
  let gram = document.getElementById("MassInput").value || 0;
  let oz = parseFloat(gram) * 0.035274;

  if (oz.toFixed(2).endsWith('.00')) {
    oz = oz.toFixed(0);
  } else if (oz.toFixed(2).endsWith('0')) {
    oz = oz.toFixed(1);
  } else {
    oz = oz.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (gram == 1) {
     resultsHTML += `<p>${gram} gram = `+ oz + " ounce</p>";
  } else if (oz == 1){
    resultsHTML += `<p>${gram} gram = `+ oz + " ounce</p>";
  } else {
    resultsHTML += `<p>${gram} grams = `+ oz + " ounces</p>";
  }
  document.getElementById("massResults").innerHTML = resultsHTML;
}

function toOz2() {
  let lbs = document.getElementById("MassInput").value || 0;
  let oz = parseFloat(lbs) * 16;

  if (oz.toFixed(2).endsWith('.00')) {
    oz = oz.toFixed(0);
  } else if (oz.toFixed(2).endsWith('0')) {
    oz = oz.toFixed(1);
  } else {
    oz = oz.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (lbs == 1) {
     resultsHTML += `<p>${lbs} lb = `+ oz + " ounces</p>";
  } else if (oz == 1) {
    resultsHTML += `<p>${lbs} lbs = `+ oz + " ounce</p>";
  } else {
    resultsHTML += `<p>${lbs} lbs = `+ oz + " ounces</p>";
  }
  document.getElementById("massResults").innerHTML = resultsHTML;
}

function toStone() {
  let kg = document.getElementById("MassInput").value || 0;
  let stone = parseFloat(kg) * 0.157473;

  if (stone.toFixed(2).endsWith('.00')) {
    stone = stone.toFixed(0);
  } else if (stone.toFixed(2).endsWith('0')) {
    stone = stone.toFixed(1);
  } else {
    stone = stone.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (kg == 1) {
     resultsHTML += `<p>${kg} Kilogram = `+ stone + " stones</p>";
  } else if (stone == 1) {
    resultsHTML += `<p>${kg} Kilograms = `+ stone + " stone</p>";
  } else {
    resultsHTML += `<p>${kg} Kilograms = `+ stone + " stones</p>";
  }
  document.getElementById("massResults").innerHTML = resultsHTML;
}
