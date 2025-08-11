const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
  // Check if file exists
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Build image URL
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

  // Send success response
  res.status(200).json({ imageUrl });
});


module.exports = router;
