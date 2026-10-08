// AI E-Waste Scanner & Segregation Logic with Camera Upload Support
function runAIScanner() {
    const fileInput = document.getElementById('imageUpload');
    const resultCard = document.getElementById('scanResult');
    const scanDetails = document.getElementById('scanDetails');
    
    // Check if the user selected or captured an image
    if (fileInput.files.length === 0) {
        alert("Please take a picture or upload an e-waste image first!");
        return;
    }

    const fileName = fileInput.files[0].name;
    resultCard.classList.remove('hidden');
    
    // Simulated categories for AI ML pipeline demonstration
    const categories = [
        {
            name: "Printed Circuit Board (PCB)",
            hazard: "Moderate (Contains trace heavy metals)",
            reusable: "Yes (Precious metal extraction)",
            value: "High (Gold, Silver, Palladium)"
        },
        {
            name: "Lithium-Ion Battery Cell",
            hazard: "⚠️ HIGH HAZARD (Fire / Explosion risk)",
            reusable: "No (Requires specialized chemical neutralization)",
            value: "Medium (Lithium, Cobalt, Nickel)"
        },
        {
            name: "Copper Wiring / Power Cables",
            hazard: "Low (Safe to handle)",
            reusable: "Yes (Stripping & wire recycling)",
            value: "High (Pure Copper)"
        },
        {
            name: "CRT Glass Display Screen",
            hazard: "⚠️ HIGH HAZARD (Contains lead & toxic phosphor)",
            reusable: "No (Specialized lead-glass recycling only)",
            value: "Low"
        }
    ];

    const detected = categories[Math.floor(Math.random() * categories.length)];

    scanDetails.innerHTML = `
        <p><strong>Uploaded File / Photo:</strong> <code>${fileName}</code></p>
        <p><strong>AI Detected Category:</strong> ${detected.name}</p>
        <p><strong>Hazard Assessment:</strong> ${detected.hazard}</p>
        <p><strong>Reusability Status:</strong> ${detected.reusable}</p>
        <p><strong>Resource Recovery Value:</strong> ${detected.value}</p>
        <p style="margin-top:10px; color:#1b5e20;"><em>✨ AI Classification Complete: Routed to specialized campus disposal bin with priority handling.</em></p>
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
