import { useState } from "react";

import Header from "./components/Header";
import Filter from "./components/Filter";
import AddContacts from "./components/AddContacts";
import Numbers from "./components/Numbers";


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
      <Header title="Phonebook" />
      <Filter filterContacts={filterContacts} />
      <AddContacts
        addPerson={addPerson}
        handleNewName={handleNewName}
        newName={newName}
        handleNewNumber={handleNewNumber}
        newNumber={newNumber}
      />
      <Numbers contacts={contactsToShow} />
    </div>
  );
};

export default App;