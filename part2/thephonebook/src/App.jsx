import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: "Angel Love",
      number: "555-357-2556"
    }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to the phone book.`);
      setNewName("");
      setNewNumber("");
    }
    else {
      setPersons(persons.concat({name: newName, number: newNumber}));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleAddName = (event) => {
    setNewName(event.target.value);
  };

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        {/* Adding name. */}
        <div>
          <label htmlFor="name">name: </label>
          <input 
            id="name" 
            value={newName} 
            onChange={handleAddName}
          />
        </div>
        {/* Adding number. */}
        <div>
          <label htmlFor="number">number: </label>
          <input 
            id="number" 
            value={newNumber} 
            onChange={handleAddNumber}
          />
        </div>
        {/* Submitting form. */}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div className="debug">debug: {newName} {newNumber}</div>
      <h2>Numbers</h2>
      {persons.map(person => {
        return (
          <p key={person.name}>
            <span>{person.name} </span>
            <span>{person.number}</span>
          </p>
        )
      })}
    </div>
  );


};

export default App;