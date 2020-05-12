# iBudget

See the live demo: <url>

### Main Landing Page
![](iBudget-main.gif)

### Calculator Component
![](iBudget-calc.gif)

## Description:

iBudget is a budget calculator app that uses your monthly income and expenses to determine your daily/weekly/monthly/bi-weekly/annual budgets.

This mini solo project was built as a 1-week sprint using the React.js framework.

## Main Features:

- Add and remove multiple instances of Income and Expense forms based on specific indexes.

- Visual representation via pie chart to emphasize conclusive data.

- Reset button to revert back to empty states (empty form).

- ~~Tracks user-inputted income and expense entries (feature dropped)~~


## Technology:

- Front-End:
  - HTML
  - CSS
  - JS
  - React

- Notable Node Modules | Libraries
  - Cypress
  - React-Bootstrap
  - React-Dom
  - React-Router-Dom

## Test-Driven Development (TDD)

Cypress was implemented to test the Calculator component and to ensure valid and appropriate behavior when calculating the conversion amounts from monthly to daily/weekly/bi-weekly/annual correctly. 

I personally found through debugging code that this was an area where invalid data could cause problems in the future and would help to save time as opposed to manually testing each feature.

### Cypress Test
![](iBudget-cypress.gif)