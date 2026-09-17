import { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
    const [expenses, setExpenses] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("All");
const [search, setSearch] = useState("");
    // Fetch expenses from MongoDB
    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/expenses"
                );

                setExpenses(response.data);
            } catch (error) {
                console.log("Error fetching expenses:", error);
            }
        };

        fetchExpenses();
    }, []);

    // Add expense
    const addExpense = async (expense) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/expenses",
                expense
            );

            setExpenses((prevExpenses) => [
                ...prevExpenses,
                response.data
            ]);
        } catch (error) {
            console.log("Error adding expense:", error);
        }
    };

    // Delete expense
    const deleteExpense = async (id) => {
        try {
            await axios.delete(
                `http://localhost:5000/api/expenses/${id}`
            );

            setExpenses((prevExpenses) =>
                prevExpenses.filter((expense) => expense._id !== id)
            );
        } catch (error) {
            console.log("Error deleting expense:", error);
        }
    };

    // Update expense
    const updateExpense = async (id, updatedExpense) => {
        try {
            const response = await axios.put(
                `http://localhost:5000/api/expenses/${id}`,
                updatedExpense
            );

            setExpenses((prevExpenses) =>
                prevExpenses.map((expense) =>
                    expense._id === id ? response.data : expense
                )
            );
        } catch (error) {
            console.log("Error updating expense:", error);
        }
    };

    // Filter expenses
 const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory =
        categoryFilter === "All" ||
        expense.category === categoryFilter;

    const matchesSearch =
        expense.description
            .toLowerCase()
            .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
});

    // Calculate total
    const totalExpenses = expenses.reduce(
        (total, expense) => total + Number(expense.amount),
        0
    );

    return (
        <div className="app">

            <header className="header">
                <h1>Expense Tracker</h1>
                <p>Manage your daily expenses easily</p>
            </header>

            <div className="summary">

                <div className="summary-card">
                    <h3>Total Expenses</h3>
                    <p>₹{totalExpenses}</p>
                </div>

                <div className="summary-card">
                    <h3>Total Transactions</h3>
                    <p>{expenses.length}</p>
                </div>

            </div>
<ExpenseChart expenses={expenses} />
            <div className="content">

                <section className="form-section">
                    <ExpenseForm onAddExpense={addExpense} />
                </section>

                <section className="list-section">

                   <div className="list-header">

    <h2>Recent Expenses</h2>

    <input
        type="text"
        placeholder="Search expenses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />

    <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
    >
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
    </select>

</div>

                    <ExpenseList
                        expenses={filteredExpenses}
                        onDeleteExpense={deleteExpense}
                        onUpdateExpense={updateExpense}
                    />

                </section>

            </div>

        </div>
    );
}

export default App;