import "./Remove-button.css";

export default function RemoveButton({ onRemove }) {
    return (
        <button className="neon-btn" onClick={onRemove}>
            Remove
            <i />
            <i />
            <i />
            <i />
        </button>
    );
}
