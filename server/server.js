import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/uploadRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// API Route
app.use("/api/upload", uploadRoutes);

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
