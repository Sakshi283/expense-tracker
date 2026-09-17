import { useState } from "react";

function ExpenseItem({ expense, onDeleteExpense, onUpdateExpense }) {
    const [isEditing, setIsEditing] = useState(false);

    const [editedExpense, setEditedExpense] = useState({
        description: expense.description,
        amount: expense.amount,
        category: expense.category,
        date: expense.date.split("T")[0]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEditedExpense((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdate = async () => {
        await onUpdateExpense(expense._id, editedExpense);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <li className="expense-item">
                <div className="edit-form">
                    <input
                        type="text"
                        name="description"
                        value={editedExpense.description}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="amount"
                        value={editedExpense.amount}
                        onChange={handleChange}
                    />

                    <select
                        name="category"
                        value={editedExpense.category}
                        onChange={handleChange}
                    >
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Bills">Bills</option>
                        <option value="Other">Other</option>
                    </select>

                    <input
                        type="date"
                        name="date"
                        value={editedExpense.date}
                        onChange={handleChange}
                    />

                    <button onClick={handleUpdate}>
                        Save
                    </button>

                    <button onClick={() => setIsEditing(false)}>
                        Cancel
                    </button>
                </div>
            </li>
        );
    }

    return (
        <li className="expense-item">
            <div className="expense-info">
                <strong>{expense.description}</strong>
                <span>{expense.category}</span>
                <small>
                    {new Date(expense.date).toLocaleDateString()}
                </small>
            </div>

            <div className="expense-right">
                <strong>₹{expense.amount}</strong>

                <button
                    className="edit-btn"
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                   onClick={() => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
        onDeleteExpense(expense._id);
    }
}}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default ExpenseItem;