
import ExpenseItem from "./ExpenseItem"


function Expense(props) {
  return (
    <ExpenseItem item={props.item}
    />
  );
}

export default Expense;
