import { useState } from "react";

function Counter() {
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      // today i am telling about my project counter
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

      <h1 style={{textAlign:"center",color:"white"}}>Counter App</h1>
    <div className="main">
      {/* create a h1 tab and create a 3 btn */}
      <h1>Counter: {value}</h1>
      <button className="custom-btn btn-14" id="First-btn" disabled={value == 0} onClick={() => setvalue(value - 1)}>
        -1
      </button>
      {/* when we click the button - button and the value as been - and the value
       as been 3 any number has been not  divide by 2 the value is odd and prime numeber is true  */}

      <button className="custom-btn btn-14" id="Second-btn" onClick={() => setvalue(value + 1)}>+1</button>
      {/* // when we click the button + button and the value as been +  and the value 
      as been 2 any number has been divide by 2 the value is even and prime numeber is true  */}
      <div>
      <button className="custom-btn btn-14" id="reset-btn" onClick={() => setvalue(0)}>Reset</button>
      </div>
      {<h3>The Number is : {even ? "Even" : "Odd"}</h3>}
      {<h3>Prime Number : {prime ?"True" :"False"}</h3>}
    </div>
    </body>
    </div>
  );
}
export default Counter;
