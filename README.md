# SpendWise – Interactive Budget Tracker

## Project Description

SpendWise is a simple budget tracking application that helps users manage their budgets and expenses. This week, I improved the project by adding JavaScript features that make it interactive.

## Improvements Made This Week

- Added a form for setting a budget.
- Added a form for entering expenses.
- Added the ability to delete individual expenses.
- Added a button to clear all expenses.
- Added automatic calculation of total expenses and remaining balance.
- Added budget status messages to help users manage their spending.

## How Conditionals Are Used

I used `if`, `else if`, and `else` statements to make decisions based on the user's budget.

For example:
- If the budget is zero, the application asks the user to set a budget.
- If expenses exceed the budget, it displays a warning.
- If the remaining balance is low, it advises the user to be careful.
- If the user is within the budget, it displays a positive message.

## How Arrays Are Used

I used an array called `expenses` to store multiple expense records.

Each expense contains:
- Expense name
- Amount
- Category

The `push()` method adds new expenses, while `splice()` removes an expense when the user deletes it.

## How Loops Are Used

I used a `for` loop to calculate the total expenses. I also used the `forEach()` method to go through the expense array and display each record on the webpage.

## How the DOM Is Updated

I used DOM manipulation to update the dashboard directly on the webpage.

Examples include:
- `getElementById()` to select HTML elements.
- `textContent` to display budget information and messages.
- `createElement()` to create expense records.
- `appendChild()` to add expense records to the page.

## How User Interactions Are Handled

I used `addEventListener()` to respond to user actions.

The application responds when users:
- Submit the budget form.
- Submit the expense form.
- Click a delete button.
- Click the clear expenses button.

These actions trigger JavaScript functions that update the data and dashboard.

## Challenges Encountered and Solutions

One challenge was calculating the total expenses from multiple records. I solved this by using loops to go through the expenses array.

Another challenge was updating the webpage after adding or deleting an expense. I solved this by creating an `updateDashboard()` function that refreshes the information.

I also added input validation to prevent invalid budget and expense amounts.

## Technologies Used

- HTML
- CSS
- JavaScript
- Git and GitHub

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Set your budget.
5. Add expenses and test the dashboard.

## Conclusion

This project helped me understand JavaScript conditionals, arrays, loops, DOM manipulation, and event listeners. SpendWise is now more interactive and helps users monitor their spending.
