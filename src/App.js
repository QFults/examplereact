import { useState } from "react";

function App() {
  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    user: {},
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setUserState({ ...userState, [name]: value })
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const user = {
      firstName: userState.firstName,
      lastName: userState.lastName
    }

    setUserState({ ...userState, user, firstName: '', lastName: '' })
  };

  return (
    <div>
      <form>
        <p>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleInputChange}
            value={userState.firstName}
            type="text"
            name="firstName"
          />
        </p>
        <p>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleInputChange}
            value={userState.lastName}
            type="text"
            name="lastName"
          />
        </p>
        <p>
          <button onClick={handleFormSubmit}>Submit</button>
        </p>
      </form>
      <div>
        <h3>First Name: {userState.user.firstName}</h3>
        <h3>Last Name: {userState.user.lastName}</h3>
      </div>
    </div>
  );
}

export default App;
