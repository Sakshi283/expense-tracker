import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {

    const categories = [
        "Food",
        "Travel",
        "Shopping",
        "Bills",
        "Other"
    ];

    const totals = categories.map((category) => {
        return expenses
            .filter((expense) => expense.category === category)
            .reduce(
                (sum, expense) => sum + Number(expense.amount),
                0
            );
    });

    const data = {
        labels: categories,
        datasets: [
            {
                data: totals,
                backgroundColor: [
                    "#ff6384",
                    "#36a2eb",
                    "#ffcd56",
                    "#4bc0c0",
                    "#9966ff"
                ],
                borderWidth: 0
            }
        ]
    };

    return (
        <div className="chart-container">
            <h2>Expenses by Category</h2>

            <Doughnut data={data} />
        </div>
    );
}

export default ExpenseChart;