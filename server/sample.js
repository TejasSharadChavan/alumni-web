import vision from "@google-cloud/vision";

const client = new vision.ImageAnnotatorClient({
  keyFilename: "./vision-key.json",
});

const testOCR = async () => {
  const imagePath = "./samples/id1.jpg"; // 👈 put a test image here
  const [result] = await client.textDetection(imagePath);
  const text = result.fullTextAnnotation?.text || "(No text detected)";
  console.log("🧾 OCR Output:\n", text);
};

testOCR();
