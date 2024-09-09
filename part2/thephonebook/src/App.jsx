import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Filter from "./components/Filter";
import AddContacts from "./components/AddContacts";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data);
      })
  });

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to the phone book.`);
      setNewName("");
      setNewNumber("");
    }
    else {
      const personObj = {
        name: newName, 
        number: newNumber
      };

      axios
        .post("http://localhost:3001/persons", personObj)
        .then(response => {
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
        });    
    }
  };
  

  const handleAddName = (event) => setNewName(event.target.value);

  const handleAddNumber = (event) => setNewNumber(event.target.value);

  const filterContacts = (event) => {
    if (event.target.value === "") {
      setShowAll(true);
    } else {
      setShowAll(false);
      setFilter(event.target.value);
    }
  }

  const contactsToShow = (showAll) ? persons : persons.filter(person => {
    const lowerCased = person.name.toLowerCase()
    return lowerCased.includes(filter.toLowerCase());
  });

  return (
    <div>
      <Header title="Phonebook" />
      <Filter filterContacts={filterContacts} />
      <AddContacts 
        addPerson={addPerson} newName={newName} handleAddName={handleAddName}
        newNumber={newNumber} handleAddNumber={handleAddNumber}
      />
      <Numbers contactsToShow={contactsToShow} />
    </div>
  );
};

export default App;