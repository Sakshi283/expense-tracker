function ExpenseList({ expenses, onDeleteExpense }) {
    return (
        <div>
            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        <strong>{expense.description}</strong> - ₹{expense.amount} ({expense.category}) on {expense.date}
                        <button onClick={() => onDeleteExpense(index)}>
    Delete
</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;