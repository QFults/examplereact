import { useState } from "react";
import Greeting from "./components/Greeting";

// const name = "John Doe";

// const names = ["John Doe", "Jane Doe", "Jack Doe", "Jerry Doe", "Jenna Doe"];

function App() {
  const [count, setCount] = useState(0)

  const handleBtnClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleBtnClick}>Click Me</button>

      {/* {names.map((name, i) => (
        <Greeting key={i} name={name} />
      ))} */}
      {/* <Greeting name={name} />
      <Greeting name="Jane Doe" /> */}
      {/* {[<button>a</button>, <button>b</button>, <button>c</button>]} */}
      {/* <button>Click Me</button> */}
    </div>
  );
}

export default App;
