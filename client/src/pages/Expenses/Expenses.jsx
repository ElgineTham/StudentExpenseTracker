import React, { useEffect, useState } from "react";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  // Mock data for now; replace with an API call later
  useEffect(() => {
    const mockExpenses = [
      { id: 1, description: "Groceries", amount: 50.0, date: "2024-11-22" },
      { id: 2, description: "Electricity Bill", amount: 75.5, date: "2024-11-20" },
      { id: 3, description: "Internet", amount: 45.0, date: "2024-11-18" },
    ];
    setExpenses(mockExpenses);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Expenses</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={expense.id}>
              <td>{index + 1}</td>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
