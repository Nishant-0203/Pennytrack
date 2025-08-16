import moment from "moment";
export const validateEmail = (email) => {
	const regex = /^[^\s@]+@[^\s]+\.[^\s]+$/;
	return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";
  
  const words = name.trim().split(" "); // split by spaces
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0]; // take first letter of each word
  }

  return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
	if(num == null || isNaN(num)) return "";

	const [integerPart, fractionPart] = num.toString().split(".");
	const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return fractionPart ? `${formattedInteger}.${fractionPart}` : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  // Sort by date (optional, but makes the chart look better)
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"), // or "MMM YY" for shorter
    amount: Number(item?.amount) || 0,
    category: item?.category || "Unknown",
  }));

  return chartData;
};

export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    source: item?.source,
  }));

  return chartData;
};



export const prepareExpenseLineChartData = (data = []) => {
  // Sort by date
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // Normalize & format
  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"), // use 'month' for XAxis
    amount: Number(item?.amount) || 0,          // ensure number, prevent NaN
    category: item?.category || "Unknown",
  }));

  return chartData;
};
