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

        setExpense((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !expense.description ||
            !expense.amount ||
            !expense.category ||
            !expense.date
        ) {
            alert("Please fill in all fields");
            return;
        }

        onAddExpense(expense);

        setExpense({
            description: "",
            amount: "",
            category: "",
            date: ""
        });
    };

    return (
        <div>
            <h2>Add Expense</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Expense name"
                    value={expense.description}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={expense.amount}
                    onChange={handleChange}
                />

                <select
                    name="category"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                    <option value="Other">Other</option>
                </select>

                <input
                    type="date"
                    name="date"
                    value={expense.date}
                    onChange={handleChange}
                />

                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default ExpenseForm;