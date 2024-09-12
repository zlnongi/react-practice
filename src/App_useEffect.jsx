import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ok");
  });

  useEffect(() => {
    console.log("good");
  }, [count]);

  const handlesetCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        클릭1
      </button>

      <button onClick={handlesetCount}>클릭2</button>
    </div>
  );
}

export default App;
