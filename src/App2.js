import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState({})

  const handleInputChange = event => {
    const { name, value } = event.target

    return name === 'firstName' ? setFirstName(value) : setLastName(value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    setUser({ firstName, lastName })
    setFirstName('')
    setLastName('')
  }

  return (
    <div>
      <form>
        <p>
          <label htmlFor="firstName">First Name</label>
          <input 
            onChange={handleInputChange}
            value={firstName}
            type="text" 
            name="firstName" />
        </p>
        <p>
          <label htmlFor="lastName">Last Name</label>
          <input 
            onChange={handleInputChange}
            value={lastName}
            type="text" 
            name="lastName" />
        </p>
        <p>
          <button onClick={handleFormSubmit}>Submit</button>
        </p>
      </form>
      <div>
        <h3>First Name: {user.firstName}</h3>
        <h3>Last Name: {user.lastName}</h3>
      </div>
    </div>
  );
}

export default App;
