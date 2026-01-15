import { useState } from "react";

function GamePage({ guess }) {
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
      <div>
        <button onClick={handleEvent}>Start</button>
        <button onClick={handleMaxEvent}>max</button>
        <button onClick={handleMinEvent}>min</button>
      </div>
      {prodone && (
        <h2 style={{ color: "green" }}>You Won the game!!  {lastdata}</h2>
      )}

      {lastvalue !== null && <p>Enter Value: {guess}</p>}
      <table >
        <thead>
          <tr>
            <th>Attempt</th>
            <th>Computer Number</th>
          </tr>
        </thead>
        <tbody>
          {collectValue.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GamePage;
