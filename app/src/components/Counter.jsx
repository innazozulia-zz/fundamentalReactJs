import React from "react";

function Counter() {
  let [num, setNum] = React.useState(0);
  return (
    <div>
      {num}
      <button onClick={() => setNum(num++)}>+</button>
      <button onClick={() => setNum(num--)}>-</button>
    </div>
  );
}

export default Counter;
