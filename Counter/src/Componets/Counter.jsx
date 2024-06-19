import { useState } from "react";

function Counter() {
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };
  function Checkprime() {
    let factor = 0;
  }
  const [value, setvalue] = useState(0);
  const even = value % 2 === 0;

  const prime = isPrime(value);
  return (
    <div>
      <body>
        <h1 style={{ textAlign: "center", color: "white" }}>Counter App</h1>
        <div className="main">
          <h1>Counter: {value}</h1>
          <button id="First-btn" disabled={value == 0} onClick={() => setvalue(value - 1)}>-1</button>
          <button id="Second-btn" onClick={() => setvalue(value + 1)}>+1</button>
          <div>
            <button id="reset-btn" onClick={() => setvalue(0)}>Reset</button>
          </div>
          {<h3>The Number is : {even ? "Even" : "Odd"}</h3>}
          {<h3>Prime Number : {prime ? "True" : "False"}</h3>}
        </div>
      </body>
    </div>
  );
}
export default Counter;
