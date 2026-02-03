app.post("/api/lead-webhook", (req, res) => {
  // Respond immediately (TimelinesAI requires fast 200)
  res.sendStatus(200);

  try {
    const payload = req.body;

    // Validate event
    if (payload?.event !== "message:received:new") {
      return; // Ignore non-message events
    }

    const message = payload.message || {};
    const chat = payload.chat || {};

    const lead = {
      phone: chat.phone || null,
      name: chat.name || null,
      messageType: message.type || null,
      text: message.text || null,
      receivedAt: new Date().toISOString(),
      raw: payload // keep full payload for now
    };

    console.log("NEW WHATSAPP LEAD:", JSON.stringify(lead, null, 2));

    // NEXT (not yet):
    // - Save to DB
    // - Push to ERP
    // - Auto-reply
  } catch (err) {
    console.error("Webhook parse error:", err);
  }
});
