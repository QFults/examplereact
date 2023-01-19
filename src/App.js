import Greeting from "./components/Greeting";

// const name = "John Doe";

const names = ["John Doe", "Jane Doe", "Jack Doe", "Jerry Doe", "Jenna Doe"];

function App() {
  return (
    <div className="App">
      {names.map((name, i) => (
        <Greeting key={i} name={name} />
      ))}
      {/* <Greeting name={name} />
      <Greeting name="Jane Doe" /> */}
      {/* {[<button>a</button>, <button>b</button>, <button>c</button>]} */}
      {/* <button>Click Me</button> */}
    </div>
  );
}

export default App;
