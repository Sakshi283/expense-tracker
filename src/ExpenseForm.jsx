import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
    const [expense, setExpense] = useState({
        description: "",
        amount: "",
        category: "",
        date: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense((prevExpense) => ({
            ...prevExpense,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!expense.description || !expense.amount || !expense.category || !expense.date) {
            alert("Please fill in all fields");
            return;
        }
        onAddExpense(expense);
        console.log("Expense submitted:", expense);
        setExpense({
            description: "",
            amount: "",
            category: "",
            date: ""
        });
    };

    return(
<div>
    <h2>Add Expense</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Expense Name:</label>
            <input
                type="text"
                name="description"
                value={expense.description}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Amount:</label>
            <input
                type="number"
                name="amount"
                value={expense.amount}
                onChange={handleChange}
            />
            <label>Category:</label>
            <select name="category" value={expense.category} onChange={handleChange}>
                <option value="">Select a category</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Bills">Bills</option>
                <option value="Other">Other</option>
            </select>
            <label>Date:</label>
            <input
                type="date" 
                name="date"
                value={expense.date}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Add Expense</button>
    </form>
</div>

    );
}
export default ExpenseForm;