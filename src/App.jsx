import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
function App() {
    const [expenses, setExpenses] = useState([]);
const addExpense = (expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
    };
    const deleteExpense = (index) => {
        setExpenses((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
    };
    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm onAddExpense={addExpense} />
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
    );
}

export default App;