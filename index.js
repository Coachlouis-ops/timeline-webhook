import express from "express";

const app = express();
app.use(express.json());

app.post("/api/lead-webhook", (req, res) => {
  res.status(200).send("OK");
  console.log("Timeline webhook received:", JSON.stringify(req.body));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
