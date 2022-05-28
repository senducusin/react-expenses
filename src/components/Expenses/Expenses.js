import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYearFilter, setSelectedYearFilter] = useState("2020");
  const expenses = props.expenses;

  const onChangeFilterHandler = (selectedYear) => {
    setSelectedYearFilter(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYearFilter}
        onChangeFilter={onChangeFilterHandler}
      />

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </Card>
  );
};

export default Expenses;
