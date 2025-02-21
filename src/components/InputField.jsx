export default function InputField({ title, ...props }) {
    return (
        <p>
            <label>{title}</label>
            <input type="number" {...props} required />
        </p>
    );
}