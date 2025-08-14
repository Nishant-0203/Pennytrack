import React, { useState,useEffect } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import IncomeOverview from "../../components/Income/IncomeOverview"; // Adjust path if needed

const Income = () => {

  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  // Get ALL Income Details
const fetchIncomeDetails = async () => {
  if (loading) return;
  setLoading(true);

  try {
    const response = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);

    if (response.data) {
      setIncomeData(response.data);
    }
  } catch (error) {
    console.log("Something went wrong. Please try again.", error);
  } finally {
    setLoading(false);
  }
};


  const handleAddIncome = async (income) => {};

  const deleteIncome = async (id) => {};

  const handleDownloadIncomeDetails = async () => {};

  useEffect(() => {
    fetchIncomeDetails();
    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview
              transactions={IncomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Income;
