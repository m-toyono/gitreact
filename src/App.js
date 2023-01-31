import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const clickCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="flex justify-center flex-col h-screen items-center">
        <div className="text-5xl m-3">{count}</div>
        <button className="btn" onClick={clickCount}>
          click
        </button>
      </div>
    </>
  );
}

export default App;
