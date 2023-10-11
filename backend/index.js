const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse JSON data and enable CORS
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Load the JSON data
let expenseData = require('./expenses.json');
let nextExpenseId = expenseData.expenses.length + 1; // Initialize the ID counter

// Define routes
app.get('/api/expenses', (req, res) => {
  res.json(expenseData);
});

app.post('/api/expenses', (req, res) => {
  const newExpense = req.body;
  newExpense.id = nextExpenseId++; // Assign a unique ID
  expenseData.expenses.push(newExpense);
  saveData();
  res.json(newExpense);
});

app.put('/api/expenses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedExpense = req.body;
  const expenseIndex = expenseData.expenses.findIndex((expense) => expense.id === id);

  if (expenseIndex !== -1) {
    expenseData.expenses[expenseIndex] = updatedExpense;
    saveData();
    res.json(updatedExpense);
  } else {
    res.status(404).json({ message: 'Expense not found' });
  }
});

app.delete('/api/expenses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const expenseIndex = expenseData.expenses.findIndex((expense) => expense.id === id);

  if (expenseIndex !== -1) {
    expenseData.expenses.splice(expenseIndex, 1);
    saveData();
    res.json({ message: 'Expense deleted' });
  } else {
    res.status(404).json({ message: 'Expense not found' });
  }
});

// Save data to JSON file
function saveData() {
  fs.writeFileSync('./expenses.json', JSON.stringify(expenseData, null, 2));
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
