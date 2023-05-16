import React, { useState } from 'react'; 
import './ExpenseItem.css';
import './ExpenseDate.js';
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button type="button" onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem;