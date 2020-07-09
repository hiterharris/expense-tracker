import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  let positive = 0;
  let negative = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].amount > 0) {
      positive += transactions[i].amount;
    } else {
      negative += transactions[i].amount;
    }
  }
  
  const income = positive.toFixed(2);
  const expenses = negative.toFixed(2);

  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>positive</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${Math.abs(expenses)}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
