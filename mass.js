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

  let formattedInput = oz >= 1000 ? parseFloat(oz).toLocaleString() : oz;
  let formattedResult = gram >= 1000 ? parseFloat(gram).toLocaleString() : gram;
  let resultsHTML = "<h3>Result:</h3>";
  if (oz == 1) {
     resultsHTML += `<p>${formattedInput} ounce = `+ formattedResult + " grams</p>";
  } else if (gram == 1){
    resultsHTML += `<p>${formattedInput} ounces = `+ formattedResult + " gram</p>";
  } else {
    resultsHTML += `<p>${formattedInput} ounces = `+ formattedResult + " grams</p>";
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

  let formattedInput = stone >= 1000 ? parseFloat(stone).toLocaleString() : stone;
  let formattedResult = kg >= 1000 ? parseFloat(kg).toLocaleString() : kg;
  let resultsHTML = "<h3>Result:</h3>";
  if (stone == 1) {
     resultsHTML += `<p>${formattedInput} stone = `+ formattedResult + " Kilograms</p>";
  } else if (kg == 1){
    resultsHTML += `<p>${formattedInput} stones = `+ formattedResult + " Kilogram</p>";
  } else {
    resultsHTML += `<p>${formattedInput} stones = `+ formattedResult + " Kilograms</p>";
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

  let formattedInput = lbs >= 1000 ? parseFloat(lbs).toLocaleString() : lbs;
  let formattedResult = kilo >= 1000 ? parseFloat(kilo).toLocaleString() : kilo;
  let resultsHTML = "<h3>Result:</h3>";
  if (kilo == 1) {
     resultsHTML += `<p>${formattedInput} lbs = `+ formattedResult + " Kilogram</p>";
  } else if (lbs == 1) {
     resultsHTML += `<p>${formattedInput} lb = `+ formattedResult + " Kilograms</p>";
  } else {
    resultsHTML += `<p>${formattedInput} lbs = `+ formattedResult + " Kilograms</p>";
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

  let formattedInput = kilo >= 1000 ? parseFloat(kilo).toLocaleString() : kilo;
  let formattedResult = lbs >= 1000 ? parseFloat(lbs).toLocaleString() : lbs;
  let resultsHTML = "<h3>Result:</h3>";
  if (kilo == 1) {
     resultsHTML += `<p>${formattedInput} Kilogram = `+ formattedResult + " lbs</p>";
  } else if (lbs == 1) {
    resultsHTML += `<p>${formattedInput} Kilograms = `+ formattedResult + " lb</p>";
  } else {
    resultsHTML += `<p>${formattedInput} Kilograms = `+ formattedResult + " lbs</p>";
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

  let formattedInput = oz >= 1000 ? parseFloat(oz).toLocaleString() : oz;
  let formattedResult = lbs >= 1000 ? parseFloat(lbs).toLocaleString() : lbs;
  let resultsHTML = "<h3>Result:</h3>";
  if (oz == 1) {
     resultsHTML += `<p>${formattedInput} ounce = `+ formattedResult + " lbs</p>";
  } else if (lbs == 1) {
    resultsHTML += `<p>${formattedInput} ounce = `+ formattedResult + " lb</p>";
  } else {
    resultsHTML += `<p>${formattedInput} ounces = `+ formattedResult + " lbs</p>";
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

  let formattedInput = gram >= 1000 ? parseFloat(gram).toLocaleString() : gram;
  let formattedResult = oz >= 1000 ? parseFloat(oz).toLocaleString() : oz;
  let resultsHTML = "<h3>Result:</h3>";
  if (gram == 1) {
     resultsHTML += `<p>${formattedInput} gram = `+ formattedResult + " ounce</p>";
  } else if (oz == 1){
    resultsHTML += `<p>${formattedInput} gram = `+ formattedResult + " ounce</p>";
  } else {
    resultsHTML += `<p>${formattedInput} grams = `+ formattedResult + " ounces</p>";
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

  let formattedInput = lbs >= 1000 ? parseFloat(lbs).toLocaleString() : lbs;
  let formattedResult = oz >= 1000 ? parseFloat(oz).toLocaleString() : oz;
  let resultsHTML = "<h3>Result:</h3>";
  if (lbs == 1) {
     resultsHTML += `<p>${formattedInput} lb = `+ formattedResult + " ounces</p>";
  } else if (oz == 1) {
    resultsHTML += `<p>${formattedInput} lbs = `+ formattedResult + " ounce</p>";
  } else {
    resultsHTML += `<p>${formattedInput} lbs = `+ formattedResult + " ounces</p>";
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

  let formattedInput = kg >= 1000 ? parseFloat(kg).toLocaleString() : kg;
  let formattedResult = stone >= 1000 ? parseFloat(stone).toLocaleString() : stone;
  let resultsHTML = "<h3>Result:</h3>";
  if (kg == 1) {
     resultsHTML += `<p>${formattedInput} Kilogram = `+ formattedResult + " stones</p>";
  } else if (stone == 1) {
    resultsHTML += `<p>${formattedInput} Kilograms = `+ formattedResult + " stone</p>";
  } else {
    resultsHTML += `<p>${formattedInput} Kilograms = `+ formattedResult + " stones</p>";
  }
  document.getElementById("massResults").innerHTML = resultsHTML;
}
