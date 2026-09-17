import ExpenseItem from "./ExpenseItem";

function ExpenseList({
    expenses,
    onDeleteExpense,
    onUpdateExpense
}) {
    return (
        <div>
            <h2>Expense List</h2>

            {expenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                <ul>
                    {expenses.map((expense) => (
                        <ExpenseItem
                            key={expense._id}
                            expense={expense}
                            onDeleteExpense={onDeleteExpense}
                            onUpdateExpense={onUpdateExpense}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ExpenseList;