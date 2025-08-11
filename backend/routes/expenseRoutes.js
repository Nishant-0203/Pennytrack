const express = require("express");
const {
  addExpense,
  getAllExpense,
  deleteExpense,
  downloadExpenseExcel
} = require("../controllers/expenseController") // fixed file name
const { protect } = require("../middleware/authMiddleware");

const router = express.Router(); // fixed syntax

// Routes
router.post("/add", protect, addExpense); // was calling wrong function
router.get("/get", protect, getAllExpense); // fixed to match expense
router.get("/downloadexcel", protect, downloadExpenseExcel);
router.delete("/:id", protect, deleteExpense);

module.exports = router;
