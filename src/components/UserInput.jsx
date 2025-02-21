import InputField from "./InputField.jsx";

const labels = ["INITIAL INVESTMENT", "ANNUAL INVESTMENT", "EXPECTED RETURN", "DURATION"];

export default function UserInput({initialInvestment, annualInvestment, expectedReturn, duration, handleChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <InputField title={labels[0]} id="initialInvestment" value={initialInvestment} onChange={handleChange}/>
                <InputField title={labels[1]} id="annualInvestment" value={annualInvestment} onChange={handleChange}/>
            </div>
            <div className="input-group">
                <InputField title={labels[2]} id="expectedReturn" value={expectedReturn} onChange={handleChange}/>
                <InputField title={labels[3]} id="duration" value={duration} onChange={handleChange}/>
            </div>
        </section>
    );
}