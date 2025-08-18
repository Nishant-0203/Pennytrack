"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Play } from "lucide-react";

const chartData = [
  { month: "Jan", expenses: 2400, income: 4000 },
  { month: "Feb", expenses: 1398, income: 3800 },
  { month: "Mar", expenses: 3800, income: 4200 },
  { month: "Apr", expenses: 3908, income: 4100 },
  { month: "May", expenses: 4800, income: 4300 },
  { month: "Jun", expenses: 3490, income: 4500 },
];

const pieData = [
  { name: "Food", value: 35, color: "#8B5CF6" },
  { name: "Transport", value: 25, color: "#F87171" },
  { name: "Entertainment", value: 20, color: "#FB923C" },
  { name: "Other", value: 20, color: "#34D399" },
];

const transactions = [
  { id: 1, description: "Grocery Store", amount: -85.5, category: "Food", date: "2024-01-15" },
  { id: 2, description: "Salary Deposit", amount: 3200.0, category: "Income", date: "2024-01-15" },
  { id: 3, description: "Coffee Shop", amount: -12.75, category: "Food", date: "2024-01-14" },
  { id: 4, description: "Gas Station", amount: -45.2, category: "Transport", date: "2024-01-14" },
];

export default function DashboardPreview() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("dashboard-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="dashboard-section" className="py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#111827" }}>
            See your money in action
          </h2>
          <p className="text-lg" style={{ color: "#6B7280" }}>
            Beautiful charts and insights that make sense of your spending
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Charts Section */}
          <div className="bg-white rounded-2xl p-6 penny-shadow">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#111827" }}>
                Expense Overview
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Line
                      type="monotone"
                      dataKey="expenses"
                      stroke="#8B5CF6"
                      strokeWidth={3}
                      dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={20} outerRadius={40} dataKey="value">
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm font-medium" style={{ color: "#6B7280" }}>
                  Spending by Category
                </p>
              </div>

              <div className="space-y-2">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm" style={{ color: "#6B7280" }}>
                      {item.name} {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions Section */}
          <div className="bg-white rounded-2xl p-6 penny-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold" style={{ color: "#111827" }}>
                Recent Transactions
              </h3>
              <button className="inline-flex items-center px-4 py-2 rounded-full gradient-button text-white font-medium text-sm hover:scale-105 transition-transform">
                <Play className="mr-2 h-4 w-4" />
                Play Demo
              </button>
            </div>

            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="font-medium" style={{ color: "#111827" }}>
                      {transaction.description}
                    </p>
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                      {transaction.category} • {transaction.date}
                    </p>
                  </div>
                  <span className={`font-semibold ${transaction.amount > 0 ? "text-green-500" : "text-red-500"}`}>
                    {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
