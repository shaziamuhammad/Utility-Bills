// Function to calculate utility bill
function calculateBill() {
    // Get input values
    const electricityUnits = parseFloat(document.getElementById('electricity').value);
    const gasUnits = parseFloat(document.getElementById('gas').value);
    const waterUnits = parseFloat(document.getElementById('water').value);
  
    // Utility rates (example rates)
    const electricityRate = 0.15; // $ per kWh
    const gasRate = 1.20; // $ per m³
    const waterRate = 0.50; // $ per m³
  
    // Calculate total cost
    const electricityCost = electricityUnits * electricityRate;
    const gasCost = gasUnits * gasRate;
    const waterCost = waterUnits * waterRate;
    const totalCost = electricityCost + gasCost + waterCost;
  
    // Display bill summary
    const billSummary = `
      <h2>Bill Summary</h2>
      <p>Electricity Cost: $${electricityCost.toFixed(2)}</p>
      <p>Gas Cost: $${gasCost.toFixed(2)}</p>
      <p>Water Cost: $${waterCost.toFixed(2)}</p>
      <p><strong>Total Cost: $${totalCost.toFixed(2)}</strong></p>
    `;
  
    document.getElementById('billSummary').innerHTML = billSummary;
  }
  