import Expense from "./components/Expenses/Expense";
import Card from "./components/UI/Card"
import NewExpense from "./components/NewExpense/NewExpense";
import "./components/Expenses/Expense.css";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const childToParentData = (expenseData) => {
    expenses.push(expenseData)
    console.log(expenseData);
  } 

  const [selecteYear, setSelectYear] = useState("2022")

  const setyear = (year) => {
    setSelectYear(year)
  }
  
  return (
    <div>
      <NewExpense onNewStock={childToParentData} />
      <Card className = 'expenses' >
        <ExpensesFilter value= {selecteYear} onChangeFilter = {setyear} />
        {expenses.map((item) => (
          <Expense item = {item}
          />
        ))}
      </Card>
    </div>
  );
}

export default App;
