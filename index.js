import express from "express";

const app = express();

/**
 * MUST be first — Railway hits /
 */
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.use(express.json());

app.post("/api/lead-webhook", (req, res) => {
  console.log("Timeline webhook received:", JSON.stringify(req.body));
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});
