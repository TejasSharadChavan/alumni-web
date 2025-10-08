import express from "express";
import multer from "multer";
import { extractText } from "../controllers/uploadControllers.js";

const router = express.Router();

// ✅ Configure Multer to store uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // save inside /uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // unique name
  },
});

const upload = multer({ storage });

// ✅ POST: /api/upload/image
router.post("/image", upload.single("image"), extractText);

export default router;
