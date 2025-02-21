import { calculateInvestmentResults, formatter } from "../util/investment.js";

const TABLE_HEADERS = ([
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital",
]);

const Results = ({ userInput }) => {
    // Calculate results once and memoize if needed in parent
    const results = calculateInvestmentResults(userInput);

    // Calculate initial investment once instead of per row
    const initialInvestment =
        results[0].valueEndOfYear -
        results[0].interest -
        results[0].annualInvestment;

    // Format function
    const formatCurrency = (value) => formatter.format(value);

    return (
        <table id="result">
            <thead>
                <tr>
                    {TABLE_HEADERS.map((header) => (
                        <th key={header} scope="col">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {results.map((row) => {
                    // Calculate derived values once per row
                    const totalInterest =
                        row.valueEndOfYear -
                        row.annualInvestment * row.year -
                        initialInvestment;
                    const totalInvested = row.valueEndOfYear - totalInterest;

                    return (
                        <tr key={row.year}>
                            <td>{row.year}</td>
                            <td>{formatCurrency(row.valueEndOfYear)}</td>
                            <td>{formatCurrency(row.interest)}</td>
                            <td>{formatCurrency(totalInterest)}</td>
                            <td>{formatCurrency(totalInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

Results.displayName = "Results";

export default Results;
