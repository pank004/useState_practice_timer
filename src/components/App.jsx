import React, { useState } from "react";

let time = new Date().toLocaleTimeString();

function App() {
  const [currTime, getTime] = useState(time);

  setInterval(showTime, 100);

  function showTime() {
    let updatedTime = new Date().toLocaleTimeString();
    getTime(updatedTime);
  }

  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
