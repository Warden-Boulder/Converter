function displayElectric() {
  let electricalSelect = document.getElementById("electric").value;
  let input = parseFloat(document.getElementById('ElectricalInput').value) || 0;
  let resultsHTML = "<h3>Results:</h3>";
  if (electricalSelect === "AtoMA") {
    let amps = input/1000000;
    if (amps % 1 === 0) {
      amps = amps.toFixed(0);
    } else if ((amps*10) % 1 === 0) {
      amps = amps.toFixed(1);
    } else {
      amps = amps.toFixed(6);
    }
    resultsHTML += `<p>${input} Amps = ${amps} MegaAmps</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "AtomA") {
    let amps = input*1000;
    if (amps % 1 === 0) {
      amps = amps.toFixed(0);
    } else if ((amps*10) % 1 === 0) {
      amps = amps.toFixed(1);
    } else {
      amps = amps.toFixed(2);
    }
    resultsHTML += `<p>${input} Amps = ${amps} MilliAmps</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "AtoO") {
    resultsHTML += `<p>Conversion from Amps to Ohms requires voltage value (R = V / I)</p>`;
    resultsHTML += `<p>Formula: Resistance (Ω) = Voltage (V) ÷ Current (A)</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "AtoV") {
    resultsHTML += `<p>Conversion from Amps to Volts requires resistance value (V = I × R)</p>`;
    resultsHTML += `<p>Formula: Voltage (V) = Current (A) × Resistance (Ω)</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  }
   else if (electricalSelect === "MAtoA") {
    let M_Amps = input*1000000;
    if (M_Amps % 1 === 0) {
      M_Amps = M_Amps.toFixed(0);
    } else if ((M_Amps*10) % 1 === 0) {
      M_Amps = M_Amps.toFixed(1);
    } else {
      M_Amps = M_Amps.toFixed(2);
    }
    resultsHTML += `<p>${input} MegaAmps = ${M_Amps} Amps</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  }
   else if (electricalSelect === "MOtoO") {
    let M_Ohms = input*1000000;
    if (M_Ohms % 1 === 0) {
      M_Ohms = M_Ohms.toFixed(0);
    } else if ((M_Ohms*10) % 1 === 0) {
      M_Ohms = M_Ohms.toFixed(1);
    } else {
      M_Ohms = M_Ohms.toFixed(2);
    }
    resultsHTML += `<p>${input} MegaOhms = ${M_Ohms} Ohms</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  }
   else if (electricalSelect === "MVtoV") {
    let M_Volts = input*1000000;
    if (M_Volts % 1 === 0) {
      M_Volts = M_Volts.toFixed(0);
    } else if ((M_Volts*10) % 1 === 0) {
      M_Volts = M_Volts.toFixed(1);
    } else {
      M_Volts = M_Volts.toFixed(2);
    }
    resultsHTML += `<p>${input} MegaVolts = ${M_Volts} Volts</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  }
   else if (electricalSelect === "mAtoA") {
    let m_Amps = input/1000;
    if (m_Amps % 1 === 0) {
      m_Amps = m_Amps.toFixed(0);
    } else if ((m_Amps*10) % 1 === 0) {
      m_Amps = m_Amps.toFixed(1);
    } else {
      m_Amps = m_Amps.toFixed(2);
    }
    resultsHTML += `<p>${input} MilliAmps = ${m_Amps} Amps</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "mVtoV") {
    let m_Volts = input/1000;
    if (m_Volts % 1 === 0) {
      m_Volts = m_Volts.toFixed(0);
    } else if ((m_Volts*10) % 1 === 0) {
      m_Volts = m_Volts.toFixed(1);
    } else {
      m_Volts = m_Volts.toFixed(2);
    }
    resultsHTML += `<p>${input} MilliVolts = ${m_Volts} Volts</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "OtoA") {
    resultsHTML += `<p>Conversion from Ohms to Amps requires voltage value (I = V / R)</p>`;
    resultsHTML += `<p>Formula: Current (A) = Voltage (V) ÷ Resistance (Ω)</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "OtoMO") {
    let ohms = input/1000000;
    if (ohms % 1 === 0) {
      ohms = ohms.toFixed(0);
    } else if ((ohms*10) % 1 === 0) {
      ohms = ohms.toFixed(1);
    } else {
      ohms = ohms.toFixed(6);
    }
    resultsHTML += `<p>${input} Ohms = ${ohms} MegaOhms</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "OtomO") {
    let ohms = input*1000;
    if (ohms % 1 === 0) {
      ohms = ohms.toFixed(0);
    } else if ((ohms*10) % 1 === 0) {
      ohms = ohms.toFixed(1);
    } else {
      ohms = ohms.toFixed(2);
    }
    resultsHTML += `<p>${input} Ohms = ${ohms} MilliOhms</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "VtoA") {
    resultsHTML += `<p>Conversion from Volts to Amps requires resistance value (I = V / R)</p>`;
    resultsHTML += `<p>Formula: Current (A) = Voltage (V) ÷ Resistance (Ω)</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "VtoMV") {
    let M_Volts = input/1000000;
    if (M_Volts % 1 === 0) {
      M_Volts = M_Volts.toFixed(0);
    } else if ((M_Volts*10) % 1 === 0) {
      M_Volts = M_Volts.toFixed(1);
    } else {
      M_Volts = M_Volts.toFixed(6);
    }
    resultsHTML += `<p>${input} Volts = ${M_Volts} MegaVolts</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "VtomV") {
    let m_Volts = input*1000;
    if (m_Volts % 1 === 0) {
      m_Volts = m_Volts.toFixed(0);
    } else if ((m_Volts*10) % 1 === 0) {
      m_Volts = m_Volts.toFixed(1);
    } else {
      m_Volts = m_Volts.toFixed(2);
    }
    resultsHTML += `<p>${input} Volts = ${m_Volts} MilliVolts</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "mOtoO") {
    let m_Ohms = input/1000;
    if (m_Ohms % 1 === 0) {
      m_Ohms = m_Ohms.toFixed(0);
    } else if ((m_Ohms*10) % 1 === 0) {
      m_Ohms = m_Ohms.toFixed(1);
    } else {
      m_Ohms = m_Ohms.toFixed(2);
    }
    resultsHTML += `<p>${input} MilliOhms = ${m_Ohms} Ohms</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  }
}
