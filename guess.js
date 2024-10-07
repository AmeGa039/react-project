import React, { useState } from "react";
import "./guess.css";

function Qellonumrin() {
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [number] = useState(Math.floor(Math.random() * 100) + 1);

    const ruajnumrin = (e) => {
        setGuess(e.target.value);
    };

    const jepnumrin = (e) => {
        e.preventDefault();

        const user = parseInt(guess);
        if (user < number) {
            setMessage('Too Low!');
        } else if (user > number) {
            setMessage('Too High!');
        } else {
            setMessage('Nice, You found the number!');
        }
    };

    return (
        <div className="guess-name">
            <h1>Jep numrin nga 1 deri ne 100</h1>
            <form onSubmit={jepnumrin}>
                <input
                    type="number"
                    value={guess}
                    onChange={ruajnumrin}
                    className="guess-input"
                />
                <button type="submit" className="guess-button">
                    Start
                </button>
            </form>
            <p className="mesazhi">{message}</p>
        </div>
    );
}

export default Qellonumrin;
