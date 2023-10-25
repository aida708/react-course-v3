import { useState } from "react";
function ErrorExample() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  function handleDecrease() {
    setCount((count) => count - 1);
  }
  return (
    <>
      <h2>useState Error example</h2>
      <button onClick={handleClick} className="btn">
        click me
      </button>
      <h3>you clicked {count} times</h3>
      <button className="btn" onClick={handleDecrease}>
        Decrease
      </button>
    </>
  );
}

export default ErrorExample;
