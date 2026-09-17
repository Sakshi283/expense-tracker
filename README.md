# 💰 Expense Tracker

A full-stack expense management web application built using the MERN stack. 
The application allows users to add, view, edit, delete, search, and filter expenses 
while providing a visual breakdown of spending by category.

## 🚀 Features

- Add new expenses
- View all expenses
- Edit existing expenses
- Delete expenses
- Search expenses by description
- Filter expenses by category
- Calculate total expenses
- Display total number of transactions
- Visualize expenses using a doughnut chart
- Responsive and colorful user interface
- Persistent data storage using MongoDB

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS
- Chart.js
- react-chartjs-2

### Backend
- Node.js
- Express.js
- Mongoose
- CORS
- dotenv

### Database
- MongoDB

## 📂 Project Structure

```text
expense-tracker/
│
├── backend/
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expenseRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ExpenseForm.jsx
│   │   │   ├── ExpenseItem.jsx
│   │   │   ├── ExpenseList.jsx
│   │   │   └── ExpenseChart.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
