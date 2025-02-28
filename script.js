document.getElementById('chipForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop default form submission

    // Get form values
    const playerId = document.getElementById('playerId').value;
    const chipAmount = document.getElementById('chipAmount').value;
    const slip = document.getElementById('slip').files[0];

    if (!playerId || !chipAmount || !slip) {
        alert('Please fill all fields and upload a slip.');
        return;
    }

    // Your WhatsApp number (replace with yours, international format, no + or spaces, e.g., 9609159915)
    const phoneNumber = '9609159915'; // Change this to your number!

    // Create message
    const message = `Chip Request, PPPoker ID: ${playerId}, Chips: ${chipAmount}`;

    // WhatsApp URL (text only for now, files need manual send)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with pre-filled message
    window.location.href = whatsappUrl;

    // Alert user to attach slip manually in WhatsApp
    setTimeout(() => {
        alert('WhatsApp will open. Please attach your slip there and send the message.');
    }, 500);
});
