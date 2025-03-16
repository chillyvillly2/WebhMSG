async function sendMessage() {
    const webhookURL = document.getElementById("webhook").value;
    const message = document.getElementById("message").value;
    const status = document.getElementById("status");

    if (!webhookURL) {
        status.innerText = "❌ Webhook URL cannot be empty!";
        status.style.color = "red";
        return;
    }

    if (!message) {
        status.innerText = "⚠️ Message cannot be empty!";
        status.style.color = "orange";
        return;
    }

    const payload = { content: message };

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            status.innerText = "✅ Message sent successfully!";
            status.style.color = "lightgreen";
        } else {
            status.innerText = "❌ Failed to send message.";
            status.style.color = "red";
        }
    } catch (error) {
        status.innerText = "❌ Error sending message.";
        status.style.color = "red";
    }
}
