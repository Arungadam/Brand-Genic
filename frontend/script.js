async function generateBrand() {
    const output = document.getElementById("output");
    output.innerText = "Generating brand names..."; // Loading state

    const payload = {
        industry: document.getElementById("industry").value,
        keywords: document.getElementById("keywords").value,
        tone: document.getElementById("tone").value
    };

    try {
        const response = await fetch("http://localhost:8000/generate-brand", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        output.innerText = data.brands;
    } catch (error) {
        output.innerText = "Error: Could not connect to the server.";
    }
}

async function generateContent() {
    const output = document.getElementById("content");
    output.innerText = "Writing content...";

    const payload = {
        description: document.getElementById("description").value,
        tone: document.getElementById("tone2").value
    };

    try {
        const response = await fetch("http://localhost:8000/generate-content", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        output.innerText = data.content;
    } catch (error) {
        output.innerText = "Error: Failed to generate content.";
    }
}

// Added the missing Logo Prompt function
async function generateLogo() {
    const output = document.getElementById("logoOutput"); // Ensure this ID exists in HTML
    output.innerText = "Creating logo prompt...";

    const payload = {
        brand_name: document.getElementById("brandNameInput").value,
        industry: document.getElementById("logoIndustryInput").value
    };

    try {
        const response = await fetch("http://localhost:8000/generate-logo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        output.innerText = data.logo_prompt;
    } catch (error) {
        output.innerText = "Error: Could not generate logo prompt.";
    }
}

async function chatAI() {
    const output = document.getElementById("chatOutput");
    const inputField = document.getElementById("chatInput");
    
    if (!inputField.value) return;

    output.innerText = "Thinking...";

    try {
        const response = await fetch("http://localhost:8000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: inputField.value })
        });
        const data = await response.json();
        output.innerText = data.response;
        inputField.value = ""; // Clear input after sending
    } catch (error) {
        output.innerText = "Error: AI is currently unavailable.";
    }
}

function scrollTools() {
    document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
}