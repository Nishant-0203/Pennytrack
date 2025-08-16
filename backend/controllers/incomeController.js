const xlsx = require("xlsx");
const Income = require("../models/Income");

// Add Income Source
exports.addIncome = async (req, res) => {
    const userId=req.user.id;
  try {
    // Your logic here
    const { icon, source, amount, date } = req.body;
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "Source and amount are required" });
    }
    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date)
    });
    await newIncome.save();
    res.status(200).json(newIncome);
  } catch (err) {
    res.status(500).json({ message: "Error adding income", error: err.message });
  }
};

// Get All Income Source
exports.getAllIncome = async (req, res) => {
    const userId = req.user.id;
  try {
    // Your logic here
    const incomes = await Income.find({ userId }).sort({ date: -1 });
    res.status(200).json(incomes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching incomes", error: err.message });
  }
};

// Delete Income Source
exports.deleteIncome = async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.json({ message: "Income deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


// Download Excel
exports.downloadIncomeExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userId }).sort({ date: -1 });

    // Prepare data for Excel
    const data = income.map(item => ({
      Source: item.source,
      Amount: item.amount,
      Date: item.date
    }));

    // Create workbook & worksheet
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Income");

    // Ensure downloads directory exists
    const fs = require('fs');
    const path = require('path');
    const downloadsDir = path.join(__dirname, '../downloads');
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir);
    }
    const filePath = path.join(downloadsDir, `Income.xlsx`);

    // Save Excel file
    xlsx.writeFile(wb, filePath);

    // Send file to client
    res.download(filePath);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
