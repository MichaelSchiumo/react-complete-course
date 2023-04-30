import './ExpenseItem.css'

function ExpenseItem() {

  const expenseDate = new Date(2021, 2, 29).toISOString();
  const title = 'Expense';
  const expenseAmount = 230.00;

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;