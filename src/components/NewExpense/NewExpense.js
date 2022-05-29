import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from "uuid";

const NewExpense = (props) => {
  const [shouldShowForm, setShouldShowForm] = useState(false);
  const onSubmitExpenseDataHandler = (expenseData) => {
    const toSubmitExpenseData = {
      ...expenseData,
      id: uuidv4(),
    };

    props.onAddExpense(toSubmitExpenseData);
  };

  const onAddExpenseHandler = () => {
    setShouldShowForm(true);
  };

  const onCancelAddExpenseHandler = () => {
    setShouldShowForm(false);
  };

  return (
    <div className="new-expense">
      {!shouldShowForm && (
        <button onClick={onAddExpenseHandler}>Add Expense</button>
      )}

      {shouldShowForm && (
        <ExpenseForm
          onSubmitExpenseData={onSubmitExpenseDataHandler}
          onCancelAddExpense={onCancelAddExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
