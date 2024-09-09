import { useState, useEffect } from "react";

import personService from "./services/persons";

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
    personService
      .getAll()
      .then(initialPeople => {
        setPersons(initialPeople);
      })
  });

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to the phone book, replace the old number with a new one?`)) {
        const toUpdate = persons.find(person => person.name === newName);

        personService
          .updateNumber(toUpdate.id, {...toUpdate, number: newNumber})
          .then(updatedPerson => {
            setPersons(persons.map(person => (toUpdate.id !== person.id) ? person : updatedPerson));
          });
      }
      setNewName("");
      setNewNumber("");
    }
    else {
      const personObj = {
        name: newName, 
        number: newNumber
      };

      personService
        .create(personObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
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

  const deleteSelected = (event) => {
    const id = event.target.id;
    const selectedPerson = persons.find(person => person.id === id) || {name: "unknown"};

    if (window.confirm(`Delete ${selectedPerson.name}?`)) {
      personService
        .deletePerson(id)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== deletedPerson.id));
          alert(`${deletedPerson.name} successfully deleted!`);
        })
        .catch(error => {
          alert("Person doesn't exist or already deleted from server.");
          console.log(error);
        });
    } else {
      console.log("Operation cancelled!");
    }
  };

  return (
    <div>
      <Header title="Phonebook" />
      <Filter filterContacts={filterContacts} />
      <AddContacts 
        addPerson={addPerson} newName={newName} handleAddName={handleAddName}
        newNumber={newNumber} handleAddNumber={handleAddNumber}
      />
      <Numbers deleteSelected={deleteSelected} contactsToShow={contactsToShow} />
    </div>
  );
};

export default App;