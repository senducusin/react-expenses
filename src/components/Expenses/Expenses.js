import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYearFilter, setSelectedYearFilter] = useState("2020");

  const onChangeFilterHandler = (selectedYear) => {
    setSelectedYearFilter(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYearFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYearFilter}
        onChangeFilter={onChangeFilterHandler}
      />

      <ExpensesChart expenses={filteredExpenses} />

      {<ExpensesList expenses={filteredExpenses} />}
    </Card>
  );
};

export default Expenses;
