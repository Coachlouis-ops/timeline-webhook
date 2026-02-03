import express from "express";

const app = express();
app.use(express.json());

// ✅ Health check (THIS FIXES "Cannot GET /")
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

// Webhook endpoint
app.post("/api/lead-webhook", (req, res) => {
  console.log("Timeline webhook received:", JSON.stringify(req.body));
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
