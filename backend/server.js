import express from "express";
import cors from "cors";
import { exec } from "child_process";

const app = express();

app.use(
  cors({
   
    origin: "*",  
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.post("/detect", (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  exec(`node ./index.js ${url}`, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr || err.message });

    try {
     
      const result = JSON.parse(stdout);
      res.json(result);
    } catch (e) {
      res.status(500).json({ error: "Invalid response from index.js" });
    }
  });
});

app.listen(5000, () =>
  console.log("✅ Server running at http://localhost:5000")
);
