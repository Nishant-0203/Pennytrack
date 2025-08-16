import React, { useState } from "react"; // Fix import for React and useState
import Input from "../inputs/Input";
import EmojiPicker from "../EmojiPickerPopup"

const AddExpenseForm = ({ onAddExpense }) => {
  const [income, setIncome] = useState({
    category: "",
    amount: "",
    date: "",
    icon: ""
  });

  const handleChange = (key, value) => {
    setIncome({
      ...income,
      [key]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(income); // Send data to parent
    setIncome({ category: "", amount: "", date: "", icon: "" }); // Reset form
  };

  return (
    <div>
        <EmojiPicker
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
        />
        <Input
          label="Category"
          value={income.category}
          onChange={({target}) => handleChange("category", target.value)}
          placeholder="Rent,Groceries,etc"
          type="text"
        />
        <Input
          label="Amount"
          type="number"
          value={income.amount}
          onChange={({target}) => handleChange("amount", target.value)}
          placeholder="Amount"
        />
        <Input
          label="Date"
          type="date"
          placeholder=""
          value={income.date}
          onChange={({target}) => handleChange("date", target.value)}
        />
        <div className="flex justify-end mt-6">
        <button type="button"
        className="add-btn add-btn-fill"
        onClick={()=>onAddExpense(income)}
        >
            Add Expense</button>
        </div>
    </div>
  );
};

export default AddExpenseForm;
