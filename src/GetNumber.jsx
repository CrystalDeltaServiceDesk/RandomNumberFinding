import { useState } from "react";
import Guessfirst from "./Guessfirst";

    const buttonStyle = {
        minWidth: "80px",
        maxWidth: "140px",
        height: "36px",
    };
    const inputStyle = {
        minWidth: "20%",
        maxWidth: "40%",
        height: "36px",
    };

function GetNumber() {
    const [guess, setGuess] = useState(null);               
    const [start, setStart] = useState(false);
    const [errvalue, seterrvalue] = useState(null);

    const handleEvent = () => {
        const num = Number(guess);

        if (!Number.isInteger(num) || num < 0 || num > 1000) {
            seterrvalue("Not valid (enter 0–1000)");
            return;
        }

        setStart(true);
    };

    return (
        <>
            {!start ? (
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: "30px" }}> Search Number Guessing Game</h1>
                    <div>
                        <input
                            type="number"
                            placeholder="Enter 0–1000"
                            onChange={(e) => {
                                setGuess(e.target.value);
                                seterrvalue("");
                            }}
                            style={inputStyle}
                        />
                    </div>
                    <div style={{ margin: '10px' }}>
                        <button style={buttonStyle} onClick={handleEvent}>Go</button>
                    </div>

                    {errvalue && <p style={{ color: "red", fontSize: '18px' }}>{errvalue}</p>}
                </div>
            ) : (
                <Guessfirst guess={Number(guess)} />
            )}
        </>
    );
}

export default GetNumber;
