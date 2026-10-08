// AI E-Waste Scanner & Segregation Logic
function runAIScanner() {
    const item = document.getElementById('sampleItem').value;
    const resultCard = document.getElementById('scanResult');
    const scanDetails = document.getElementById('scanDetails');
    
    resultCard.classList.remove('hidden');
    
    let classification = "";
    let hazardLevel = "";
    let reusable = "";
    let recoveryValue = "";

    switch(item) {
        case 'pcb':
            classification = "Printed Circuit Board (PCB)";
            hazardLevel = "Moderate (Contains trace heavy metals)";
            reusable = "Yes (Precious metal extraction)";
            recoveryValue = "High (Gold, Silver, Palladium)";
            break;
        case 'li ion':
            classification = "Lithium-Ion Battery Cell";
            hazardLevel = "⚠️ HIGH HAZARD (Fire / Explosion risk)";
            reusable = "No (Requires specialized chemical neutralization)";
            recoveryValue = "Medium (Lithium, Cobalt, Nickel)";
            break;
        case 'cables':
            classification = "Copper Wiring / Power Cables";
            hazardLevel = "Low (Safe to handle)";
            reusable = "Yes (Stripping & wire recycling)";
            recoveryValue = "High (Pure Copper)";
            break;
        case 'crt':
            classification = "CRT Glass Display Screen";
            hazardLevel = "⚠️ HIGH HAZARD (Contains lead & toxic phosphor)";
            reusable = "No (Specialized lead-glass recycling only)";
            recoveryValue = "Low";
            break;
    }

    scanDetails.innerHTML = `
        <p><strong>Detected Category:</strong> ${classification}</p>
        <p><strong>Hazard Assessment:</strong> ${hazardLevel}</p>
        <p><strong>Reusability Status:</strong> ${reusable}</p>
        <p><strong>Resource Recovery Value:</strong> ${recoveryValue}</p>
        <p style="margin-top:10px; color:#1b5e20;"><em>✨ AI Recommendation: Routed to specialized campus disposal bin with high priority.</em></p>
    `;
}

// E-Waste Impact Calculation Logic
document.getElementById('eWasteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const device = document.getElementById('deviceType').value;
    const count = parseInt(document.getElementById('deviceCount').value);
    
    let co2PerUnit = 0;
    let materialRecovery = "";

    switch(device) {
        case 'smartphone':
            co2PerUnit = 55;
            materialRecovery = "Gold, Palladium, and Cobalt";
            break;
        case 'laptop':
            co2PerUnit = 200;
            materialRecovery = "Aluminum, Copper, and Lithium";
            break;
        case 'desktop':
            co2PerUnit = 400;
            materialRecovery = "Circuit boards, Iron, and Gold";
            break;
        case 'television':
            co2PerUnit = 300;
            materialRecovery = "Glass, Copper coils, and Plastics";
            break;
    }

    const totalCo2 = co2PerUnit * count;
    
    const resultBox = document.getElementById('resultBox');
    const outputText = document.getElementById('outputText');
    
    resultBox.classList.remove('hidden');
    outputText.innerHTML = `Properly recycling <strong>${count} ${device}(s)</strong> saves approximately <strong>${totalCo2} kg of CO2 emissions</strong>[cite: 3]. <br><br>♻️ <em>Recovered Elements:</em> ${materialRecovery}.`;
});

// Drop-off Hub Finder Simulation Logic
function searchHubs() {
    const query = document.getElementById('citySearch').value.trim();
    const hubList = document.getElementById('hubList');
    
    if(query === "") {
        alert("Please enter a location or campus zone name.");
        return;
    }

    hubList.innerHTML = `
        <li><strong>CSIT Smart Collection Kiosk</strong> - Near Lab 3, ${query} (Status: Active 🟢 | EcoScore: 98)</li>
        <li><strong>Central Campus E-Waste Bin</strong> - Main Gate Hub, ${query} (Status: Safe Drop Zone)</li>
        <li><strong>Authorized Recycling Unit</strong> - Industrial Zone, ${query} (Certified Partner)</li>
    `;
}
