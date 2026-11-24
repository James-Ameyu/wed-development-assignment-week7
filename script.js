// Store the budget and expenses
let budget = 0;
let expenses = [];

// Get HTML elements
const budgetForm = document.getElementById("budgetForm");
const expenseForm = document.getElementById("expenseForm");
const budgetInput = document.getElementById("budgetInput");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const budgetOutput = document.getElementById("budgetOutput");
const expensesOutput = document.getElementById("expensesOutput");
const balanceOutput = document.getElementById("balanceOutput");
const expenseList = document.getElementById("expenseList");
const budgetStatus = document.getElementById("budgetStatus");
const message = document.getElementById("message");
const clearButton = document.getElementById("clearButton");

// Format amounts as Kenyan shillings
function formatMoney(amount) {
    return "KSh " + amount.toFixed(2);
}

// Calculate the total of all expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// Update the dashboard
function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const balance = budget - totalExpenses;

    budgetOutput.textContent = formatMoney(budget);
    expensesOutput.textContent = formatMoney(totalExpenses);
    balanceOutput.textContent = formatMoney(balance);

    // Use conditions to check the budget
    if (budget <= 0) {
        budgetStatus.textContent = "Please set a budget greater than zero.";
    } else if (balance < 0) {
        budgetStatus.textContent =
            "Warning: You have exceeded your budget by " +
            formatMoney(Math.abs(balance)) + ".";
    } else if (balance === 0) {
        budgetStatus.textContent = "You have used your entire budget.";
    } else if (balance <= budget * 0.2) {
        budgetStatus.textContent =
            "Careful! Your budget is almost finished.";
    } else {
        budgetStatus.textContent =
            "Good job! You are within your budget.";
    }

    displayExpenses();
}

// Display all expenses on the webpage
function displayExpenses() {
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.textContent = "No expenses added yet.";
        return;
    }

    // Loop through the array and display every expense
    expenses.forEach(function (expense, index) {
        const item = document.createElement("div");
        item.className = "expense-item";

        const details = document.createElement("div");
        details.className = "expense-details";

        const name = document.createElement("strong");
        name.textContent = expense.name;

        const category = document.createElement("p");
        category.textContent = "Category: " + expense.category;

        const amount = document.createElement("p");
        amount.textContent = formatMoney(expense.amount);

        details.appendChild(name);
        details.appendChild(category);
        details.appendChild(amount);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.type = "button";
        deleteButton.dataset.index = index;

        item.appendChild(details);
        item.appendChild(deleteButton);

        expenseList.appendChild(item);
    });
}

// Handle setting the budget
budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newBudget = Number(budgetInput.value);

    if (!Number.isFinite(newBudget) || newBudget <= 0) {
        message.textContent = "Please enter a valid budget greater than zero.";
        return;
    }

    budget = newBudget;
    message.textContent = "Your budget has been updated successfully.";

    updateDashboard();
    budgetForm.reset();
});

// Handle adding a new expense
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    if (budget <= 0) {
        message.textContent = "Please set your budget before adding expenses.";
        return;
    }

    if (name === "" || category === "") {
        message.textContent = "Please fill in all expense details.";
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        message.textContent = "Please enter a valid expense amount.";
        return;
    }

    // Add the expense record to the array
    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    message.textContent = "Expense added successfully.";

    updateDashboard();
    expenseForm.reset();
});

// Handle deleting an expense
expenseList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        const index = Number(event.target.dataset.index);

        expenses.splice(index, 1);

        message.textContent = "Expense deleted successfully.";
        updateDashboard();
    }
});

// Handle clearing all expenses
clearButton.addEventListener("click", function () {
    expenses = [];

    message.textContent = "All expenses have been cleared.";
    updateDashboard();
});

// Show the starting dashboard
updateDashboard();