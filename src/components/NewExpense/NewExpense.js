import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const childToParentData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.onNewStock(expenseData);
  }  
  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={childToParentData} />
    </div>
  );
};

export default NewExpense;
