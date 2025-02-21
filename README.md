# Investment Calculator
This is a simple investment calculator built with React. It allows users to input their investment details and calculates the expected investment growth over time.

[DEMO](https://rehman308.github.io/investment-calc)

## Features

-   Users can input:
    -   Initial Investment
    -   Annual Investment
    -   Expected Return (%)
    -   Investment Duration (years)
-   Input validation ensures all fields contain valid numerical values.
-   Results are displayed in a table format with calculated values:
    -   Investment Value
    -   Annual Interest
    -   Total Interest Earned
    -   Invested Capital

## Project Structure

```
.
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── UserInput.jsx
│   │   ├── Results.jsx
│   │   ├── InputField.jsx
│   ├── util/
│   │   ├── investment.js
│   ├── App.jsx
│   ├── index.jsx
│	├── index.css
└── README.md

```

## Installation

1.  Clone the repository:
    
    ```sh
    git clone https://github.com/rehman308/investment-cal.git
    
    ```
    
2.  Navigate to the project directory:
    
    ```sh
    cd investment-cal
    
    ```
    
3.  Install dependencies:
    
    ```sh
    npm install
    
    ```
    

## Usage

To start the development server, run:

```sh
npm run dev

```

Then open [http://localhost:5173](http://localhost:5173/) in your browser.

## Components

### `App.jsx`

-   Manages the application's state.
-   Handles user input validation.
-   Displays components dynamically based on user input.

### `UserInput.jsx`

-   Displays input fields for user investment details.
-   Uses `InputField` for structured input.

### `Results.jsx`

-   Displays investment projections in a tabular format.
-   Calls `calculateInvestmentResults` from `investment.js`.
-   Formats currency using `formatter`.

## Utility Functions

### `investment.js`

-   Contains `calculateInvestmentResults`, which computes yearly investment growth.
-   Provides a currency formatter utility.

## Validation Logic

-   `isDurationValid()`: Ensures the duration is within a valid range (0-100 years).
-   `isInputComplete()`: Checks all inputs are provided and numeric.

## License

This project is licensed under the MIT License.