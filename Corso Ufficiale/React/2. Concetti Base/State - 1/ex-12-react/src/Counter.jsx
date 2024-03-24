import React, { useState } from "react";

export function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    // Il parametro della funzione "setter" deve essere una funzione
    // per poter ottenere il valore precedente di "counter" e incrementarlo
    // correttamente.
    setCounter((prevCounter) => prevCounter + incrementAmount);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleClick}>Incrementa</button>
    </div>
  );
}
