import { v4 as uuidv4 } from "uuid";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  let expenses = [
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
      date: new Date(2023, 1, 13),
    },
    {
      id: uuidv4(),
      title: "House",
      amount: 50000,
      date: new Date(2023, 1, 13),
    },
  ];

  const onAddExpenseHandler = (newExpense) => {
    expenses.push(newExpense);
    console.log(expenses);
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
