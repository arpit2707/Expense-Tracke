import React, { useState, useEffect } from "react";
import ExpenseList from "./expenselist";
import { useForm } from "react-hook-form";
import axios from "axios";

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getexpenses = async () => {
    const resp = await axios.get(
      "https://indigo-pod-388318-default-rtdb.firebaseio.com/expenses.json"
    );
    setExpenses(resp.data);
  };
  useEffect(() => {
    getexpenses();
  }, []);
  const [expenses, setExpenses] = useState([]);
  const submit = async (data) => {
    const exep = await axios.post(
      "https://indigo-pod-388318-default-rtdb.firebaseio.com/expenses.json",
      {
        amount: data.amount,
        description: data.description,
        category: data.category,
      }
    );
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "60vh" }}
    >
      <form className="d-flex" onSubmit={handleSubmit(submit)}>
        <input
          className="ml-2"
          placeholder="amount"
          type="number"
          {...register("amount", { required: true })}
        />
        <input
          className="ml-2"
          placeholder="description"
          {...register("description", { required: true })}
          type="text"
        />
        <select {...register("category", { required: true })} className="ml-2">
          <option disabled>Select Category</option>
          <option>Food</option>
          <option>Clothes</option>
          <option>Medicine</option>
          <option>Transport</option>
        </select>
        <button className="btn btn-primary ml-2">Add Expense</button>
      </form>
      {expenses && <ExpenseList value={expenses} />}
    </div>
  );
};

export default ExpenseForm;
