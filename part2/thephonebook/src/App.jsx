import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: "Angel Love",
      id: 1,
    }
  ]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    
    const nameObj = {
      name: newName,
      id: String(persons.length + 1)
    };

    setPersons(persons.concat(nameObj));
    setNewName("");
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
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
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
          return <li key={person.id}>{person.name}</li>
        })}
      </ul>
    </div>
  );


};

export default App;