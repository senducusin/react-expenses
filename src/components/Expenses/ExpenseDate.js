import "./ExpenseDate.css";

function ExpenseDate(props) {
  const language = "en-US";
  const month = props.date.toLocaleString(language, { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString(language, { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense_date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
