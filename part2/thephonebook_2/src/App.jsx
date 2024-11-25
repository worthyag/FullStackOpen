import { useState, useEffect } from "react";

import personService from "./services/persons";

import Header from "./components/Header";
import Filter from "./components/Filter";
import AddContacts from "./components/AddContacts";
import Numbers from "./components/Numbers";
import Notification from "./components/Notification";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState("");
  const [displayMessage, setDisplayMessage] = useState([null, null]);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  }, []);


  const existingPerson = (name) => {
    window.alert(`${name} is already added to phonebook`);
  };

  const showNotification = (msg, duration, isSuccess) => {
    setDisplayMessage([msg, isSuccess]);
    setTimeout(() => setDisplayMessage([null, null]), duration);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        const toUpdate = persons.find(p => p.name.toLowerCase() === newName.toLowerCase());
        personService
          .update(toUpdate.id, {...toUpdate, number: newNumber})
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson));
            showNotification(`Updated ${updatedPerson.name}`, 3000, true);
          })
          .catch(error => {
            console.log(error);
            setPersons(persons.filter(p => newName !== p.name));
          });
      } else
          existingPerson(newName);
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
          showNotification(`Added ${returnedPerson.name}`, 3000, true);
        });
    }
    setNewName("");
    setNewNumber("");
  }

  const deletePerson = (event) => {
    console.log("Will delete soon!");
    console.log(event.target.id);
    
    const id = event.target.id;
    const selectedPerson = persons.find(p => p.id === id) || { name: "unknown"};

    if (window.confirm(`Delete ${selectedPerson.name}?`)) {
      personService
        .deletePerson(id)
        .then(deletedPerson => {
          setPersons(persons.filter(p => p.id !== deletedPerson.id));
          showNotification(`Deleted ${deletedPerson.name}`, 3000, true);
        }).catch(error => {
          showNotification(`${selectedPerson.name} doesn't exist or already deleted from server.`, 
                            3000,
                          false);
          console.log(error);
          setPersons(persons.filter(p => p.name !== selectedPerson.name));
        })
    } else {
      console.log("Operation cancelled!");
    }


    
    
  };

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
      <Notification message={displayMessage} />
      <Filter filterContacts={filterContacts} />
      <AddContacts
        addPerson={addPerson}
        handleNewName={handleNewName}
        newName={newName}
        handleNewNumber={handleNewNumber}
        newNumber={newNumber}
      />
      <Numbers 
        contacts={contactsToShow}
        deletePerson={deletePerson} 
      />
    </div>
  );
};

export default App;