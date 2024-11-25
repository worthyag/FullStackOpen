import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "07945283882" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState("");

  const existingPerson = (name) => {
    window.alert(`${name} is already added to phonebook`);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName))
      existingPerson(newName);
    else {
      const personObj = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(personObj));
    }
    setNewName("");
    setNewNumber("");
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const filterContacts = (event) => {
    if (event.target.value === "")
      setShowAll(true);
    else {
      setShowAll(false);
      setFilter(event.target.value);
    }
  };

  const contactsToShow = showAll ? persons : persons.filter(person => {
    const lowerCased = person.name.toLowerCase();
    return lowerCased.includes(filter.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <p>Filter shown with <input onChange={filterContacts} /></p>
      <h2>Add New Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      {contactsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  );
};

export default App;