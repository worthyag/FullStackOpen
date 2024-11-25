const Numbers = ({ contacts, deletePerson }) => {
  return (
    <section className="contacts">
      <h2>Contacts</h2>
      {contacts.map(person => <p key={person.name}>
        {person.name} {person.number} <button id={person.id} onClick={deletePerson}>delete</button>
      </p>)}
    </section>
  );
};

export default Numbers;