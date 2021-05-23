import React, { useState } from "react";
export default function UseMemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  return (
    <div>
      <h1>{counter1}</h1>
      <h1>{counter2}</h1>
    </div>
  );
}
