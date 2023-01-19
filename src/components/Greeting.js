const name = 'John Doe'
const a = 4
const b = 5

function Greeting() {
  return (
    <>
      <h1>Hello {name}!</h1>
      <h1>Goodbye World!</h1>
      <p>Sum: {a + b}</p>
      <p>{Math.floor(Math.random() * 100) + 1}</p>
      {(() => { return 5 })()}
    </>
  );
}

export default Greeting;
