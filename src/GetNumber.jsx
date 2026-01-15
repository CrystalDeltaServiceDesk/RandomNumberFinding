import { useState } from "react";
import GamePage from "./guessfirst";

function GetNumber() {
    const [guess, setGuess] = useState("");
    const [start, setStart] = useState(false);
    const [errvalue, seterrvalue] = useState("");

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
                    <h1 style={{fontSize:"30px"}}> Search Number Guessing Game</h1>
                    <div>
                        <input
                            type="number"
                            placeholder="Enter 0–1000"
                            onChange={(e) => {
                                setGuess(e.target.value);
                                seterrvalue("");
                            }}
                            style={{ width: '10%' }}
                        />
                    </div>
                    <div style={{ margin: '10px' }}>
                        <button style={{width:'5%'}} onClick={handleEvent}>Go</button>
                    </div>

                    {errvalue && <p style={{ color: "red" }}>{errvalue}</p>}
                </div>
            ) : (
                <GamePage guess={Number(guess)} />
            )}
        </>
    );
}

export default GetNumber;
