import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

const MIN_DURATION = 0;
const MAX_DURATION = 100;

function App() {
    // Initializing state with default investment values
    const [userInput, setUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 1000,
        expectedReturn: 12,
        duration: 1,
    });

    // Check is Duration not as expected
    const isDurationValid = () => {
        return (
            userInput.duration > MIN_DURATION &&
            userInput.duration < MAX_DURATION
        );
    };

    // Check if all input values are valid numbers
    const isInputComplete = () => {
        return Object.values(userInput).every(
            (value) => value !== undefined && value !== null && !isNaN(value)
        );
    };

    // Handle input changes
    const handleChange = (event) => {
        const { id, value } = event.target;
        // Convert input to float and update state
        setUserInput((prevState) => ({
            ...prevState,
            [id]: parseFloat(value),
        }));
    };

    // Error message
    const ErrorMessage = ({ message }) => <p className="center">{message}</p>;

    // Combine validation checks into a single condition
    const showResults = isInputComplete() && isDurationValid();

    return (
        <>
            <Header />
            <UserInput {...userInput} handleChange={handleChange} />
            {!isDurationValid() ? (
                <ErrorMessage
                    message={`Duration must be between ${MIN_DURATION} and ${MAX_DURATION}`}
                />
            ) : showResults ? (
                <Results userInput={userInput} />
            ) : (
                <ErrorMessage message="Please enter all required data" />
            )}
        </>
    );
}

export default App;
