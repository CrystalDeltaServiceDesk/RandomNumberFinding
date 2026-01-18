import { useEffect, useState } from "react";
import GetNumber from "./GetNumber";

  const buttonStyle = {
    minWidth: "80px",
    maxWidth: "140px",
    height: "36px",
  };
  
function Guessfirst({ guess }) {

  const [min, setmin] = useState(0);
  const [max, setmax] = useState(1000);
  const [collectValue, setcollectValue] = useState([]);
  const [prodone, setprodone] = useState(false);
  const [lastdata, setlastdata] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [newGame, setNewGame] = useState(false);

  const handleEvent = () => {
    handleMainEvent();
    setIsClicked(true)
  };

  useEffect(() => {
    if (lastdata > guess) {
      setmax(lastdata - 1);
      console.log(`max number ${max}`)
    } else {
      setmin(lastdata + 1);
      console.log(`min number ${min}`)
    }
    if (lastdata === guess) {
      setprodone(true);
      return;
    }
  }, [min, max, lastdata])

  const handleMainEvent = () => {
    if (prodone) return;

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setcollectValue(prev => [...prev, randomNum]);

    setlastdata(randomNum);
  };


  const handleNewGame = () => {
    setNewGame(true)
  }

  const lastvalue =
    collectValue.length > 0
      ? collectValue[collectValue.length - 1]
      : null;

  return (
    <>
      {newGame ? <GetNumber />
        : <div>
          <div style={{ textAlign: 'center', margin: '10px' }}>
            {isClicked ?
              <button style={buttonStyle} onClick={handleNewGame}>Start New Game</button>
              : <button style={buttonStyle} onClick={handleEvent}>Start</button>
            }      </div>
          <div style={{ textAlign: 'center' }}>
            {prodone && (
              <h2 style={{ color: "green" }}>You Won the game!!  {lastdata}</h2>
            )}

            {lastvalue !== null && <p>Enter Value: {guess}</p>}
            <div style={{ display: 'flex', justifyContent: "center", gap: '2%' }}>
              <button style={buttonStyle} onClick={handleMainEvent} disabled={!isClicked}>min</button>
              <button style={buttonStyle} onClick={handleMainEvent} disabled={!isClicked}>max</button>

            </div>
            <table style={{
              margin: "auto", marginTop: "10px", border: '1px solid black', borderCollapse: "collapse",
            }} >
              <thead style={{ border: '1px solid black' }}>
                <tr >
                  <th style={{ border: "1px solid black", padding: "10px" }}>Attempt</th>
                  <th style={{ border: "1px solid black", padding: "10px" }}>Computer Number</th>
                </tr>
              </thead>
              <tbody style={{ border: '1px solid black' }}>
                {collectValue.map((value, index) => (
                  <tr key={index} >
                    <td style={{ border: "1px solid black", padding: "10px" }}>{index + 1}</td>
                    <td style={{ border: "1px solid black", padding: "10px" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>}
    </>
  );
}

export default Guessfirst;
