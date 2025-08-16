import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import IncomeOverview from "../../components/Income/IncomeOverview"; // Adjust path if needed
import Modal from "../../components/Modal";
import axiosInstance from "../../utils/axiosInstance"; // Adjust path if needed
import { API_PATHS } from "../../utils/apiPaths"; // Adjust path if needed
import AddIncomeForm from "../../components/Income/AddIncomeForm"; // Adjust path if needed
import { toast } from "react-hot-toast"; // Adjust path if needed
import IncomeList from "../../components/Income/IncomeList"; // Adjust path if needed
import DeleteAlert from "../../components/DeleteAlert";
import { useUserAuth } from "../../hooks/useUserAuth";


const Income = () => {
  useUserAuth();
  const [IncomeData, setIncomeData] = useState([]);
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


  // Handle Add Income
const handleAddIncome = async (income) => {
    const { source, amount, date, icon } = income;

    // Validation Checks
    if (!source.trim()) {
        toast.error("Source is required.");
        return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        toast.error("Amount should be a valid number greater than 0.");
        return;
    }

    if (!date) {
        toast.error("Date is required.");
        return;
    }

    try{
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {
        source,
        amount,
        date,
        icon,
      });

      setOpenAddIncomeModal(false);
      toast.success("Income added successfully.");
      fetchIncomeDetails(); // Refresh income data
    }
    catch (error) {
      console.error("Error adding income:",
        error.reponse?.data?.message || error.message);
    }
};


  const deleteIncome = async (id) => {
  try {
    await axiosInstance.delete(
      API_PATHS.INCOME.DELETE_INCOME(id));

    setOpenDeleteAlert({ show: false, data: null });

    toast.success("Income details deleted successfully");
    fetchIncomeDetails();
  } catch (error) {
    console.error(
      "Error deleting income:",
      error.response?.data?.message || error.message
    );
  }
};


  const handleDownloadIncomeDetails = async () => {
    try{
      const response = await axiosInstance.get(
        API_PATHS.INCOME.DOWNLOAD_INCOME,
        {
          responseType: "blob",
        }
        );
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "INCOME_details.xlsx");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
    }
    catch (error) {
      console.error("Error downloading INCOME details:",error);
      toast.error("Error downloading INCOME details.");
    }
   };

  useEffect(() => {
    fetchIncomeDetails();
    return () => { };
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

          <IncomeList
            transactions={IncomeData}
            onDelete={(id)=>{
              setOpenDeleteAlert({
                show: true,
                data: id});
            }}
            onDownload={handleDownloadIncomeDetails}
          />
        </div>

        {/* Add Income Modal */}
        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
          <AddIncomeForm onAddIncome={handleAddIncome}/>
        </Modal>

        <Modal 
        isOpen ={openDeleteAlert.show}
        onClose={()=> setOpenDeleteAlert({show: false,data: null})}
        title="Delete Income"
        >
          <DeleteAlert
          content="Are you sure you want to delete this income detail?"
          onDelete={()=> deleteIncome(openDeleteAlert.data)}
          />

        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income;
