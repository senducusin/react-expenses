import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from "uuid";

const NewExpense = (props) => {
  const onSubmitExpenseDataHandler = (expenseData) => {
    const toSubmitExpenseData = {
      ...expenseData,
      id: uuidv4(),
    };

    props.onAddExpense(toSubmitExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={onSubmitExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
