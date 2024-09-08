import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Angel Love" }
  ]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      console.log(`${newName} is already added to the phone book.`);
      window.alert(`${newName} is already added to the phone book.`);
      setNewName("");
    }
    else {
      const nameObj = {
        name: newName
      };
  
      setPersons(persons.concat(nameObj));
      setNewName("");
    }
  };

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          <label htmlFor="name">name: </label>
          <input 
            id="name" 
            value={newName} 
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div className="debug">debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
          return <li key={person.name}>{person.name}</li>
        })}
      </ul>
    </div>
  );


};

export default App;