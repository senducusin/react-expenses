import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: uuidv4(),
    title: "Macbook Pro M1",
    amount: 3000,
    date: new Date(2023, 1, 13),
  },
  {
    id: uuidv4(),
    title: "Gaming PC",
    amount: 4000,
    date: new Date(2023, 10, 13),
  },
  {
    id: uuidv4(),
    title: "House",
    amount: 50000,
    date: new Date(2023, 1, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddExpenseHandler = (newExpense) => {
    setExpenses((previousExpenses) => {
      return [newExpense, ...previousExpenses];
    });
  };

  return (
    <div>
      <h2>Hello World!</h2>

      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
