import { useState } from "react";


function GamePage({ guess }) {
  const buttonStyle = {
    minWidth: "80px",
    maxWidth: "140px",
    height: "36px",
  };
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(1000);
  const [collectValue, setcollectValue] = useState([]);
  const [prodone, setprodone] = useState(false);
  const [lastdata, setlastdata] = useState(null);



  const handleEvent = () => {
    handleMaxEvent();
  };

  const handleMaxEvent = () => {
    setcollectValue(prev => [...prev, randomNum]);

    if (prodone) return;

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setlastdata(randomNum);

    if (randomNum === guess) {
      setprodone(true);
      return;
    }

    if (randomNum > guess) {
      setmax(randomNum - 1);
    } else {
      setmin(randomNum + 1);
    }

  };

  const handleMinEvent = () => {
    handleMaxEvent();
  };

  const lastvalue =
    collectValue.length > 0
      ? collectValue[collectValue.length - 1]
      : null;

  return (
    <>
      <div style={{ textAlign: 'center', margin: '10px' }}>
        <button style={buttonStyle} onClick={handleEvent}>Start</button>
      </div>
      <div style={{ textAlign: 'center' }}>
        {prodone && (
          <h2 style={{ color: "green" }}>You Won the game!!  {lastdata}</h2>
        )}

        {lastvalue !== null && <p>Enter Value: {guess}</p>}
        <div style={{ display: 'flex', justifyContent: "center", gap: '2%' }}>
          <button style={buttonStyle} onClick={handleMaxEvent}>max</button>
          <button style={buttonStyle} onClick={handleMinEvent}>min</button>
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
    </>
  );
}

export default GamePage;
