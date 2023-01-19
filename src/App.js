import Greeting from "./components/Greeting";

const name = "John Doe";

function App() {
  return (
    <div className="App">
      <Greeting name={name} />
      <Greeting name="Jane Doe" />
      <button>Click Me</button>
    </div>
  );
}

export default App;
