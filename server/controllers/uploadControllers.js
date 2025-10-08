import vision from "@google-cloud/vision";
import fs from "fs";

// ✅ Initialize Google Vision Client
const client = new vision.ImageAnnotatorClient({
  keyFilename: "./vision-key.json", // path to your Google key file
});

export const extractText = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imagePath = req.file.path;
    console.log("📸 File saved at:", imagePath);

    // ✅ Extract text using Vision API
    const [result] = await client.textDetection(imagePath);
    const text = result.fullTextAnnotation?.text || "";

    console.log("🧾 Extracted Text:\n", text);

    // Optional: delete after processing
    // fs.unlinkSync(imagePath);

    res.json({
      message: "✅ Text extracted successfully",
      extractedText: text,
      imagePath: imagePath,
    });
  } catch (err) {
    console.error("❌ OCR Error:", err);
    res.status(500).json({ message: "OCR failed", error: err.message });
  }
};
