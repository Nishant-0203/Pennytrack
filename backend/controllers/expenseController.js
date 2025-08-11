const xlsx = require("xlsx");
const Expense = require("../models/Expense");

// Add Expense Source
exports.addExpense = async (req, res) => {
    const userId=req.user.id;
  try {
    // Your logic here
    const { icon, category, amount, date } = req.body;
    if (!category || !amount || !date) {
      return res.status(400).json({ message: "Source and amount are required" });
    }
    const newExpense = new Expense({
      userId,
      icon,
      category,
      amount,
      date: new Date(date)
    });
    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (err) {
    res.status(500).json({ message: "Error adding Expense", error: err.message });
  }
};

// Get All Expense Source
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;
  try {
    // Your logic here
    const Expenses = await Expense.find({ userId }).sort({ date: -1 });
    res.status(200).json(Expenses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching Expenses", error: err.message });
  }
};

// Delete Expense Source
exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


// Download Excel
exports.downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const Expense = await Expense.find({ userId }).sort({ date: -1 });

    // Prepare data for Excel
    const data = Expense.map(item => ({
      category: item.category,
      Amount: item.amount,
      Date: item.date
    }));

    // Create workbook & worksheet
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Expense");

    // Save Excel file
    xlsx.writeFile(wb, "Expense.xlsx");

    // Send file to client
    res.download("Expense.xlsx");
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
