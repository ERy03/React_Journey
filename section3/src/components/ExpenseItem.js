import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 5, 11);
  const expenseTitle = "Title";
  const expenseAmount = 100;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
