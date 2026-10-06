import { useState } from "react";
import "./Cart-button.css";

export default function CartButton({ onAdd }) {
    const [adding, setAdding] = useState(false);

    function handleClick() {
        if (adding) return;
        setAdding(true);
        onAdd?.();
        setTimeout(() => setAdding(false), 2500);
    }

    return (
        <button className={`cart-btn ${adding ? "go" : ""}`} onClick={handleClick}>
            <span className="label">Add to cart</span>
            <span className="done">Added ✓</span>
            <svg viewBox="0 0 24 24">
                <path d="M2 3h3l2.5 12h11L21 7H6" />
                <circle cx="9" cy="20" r="1.6" />
                <circle cx="17" cy="20" r="1.6" />
            </svg>
            <i className="box" />
            <i className="scan" />
        </button>
    );
}