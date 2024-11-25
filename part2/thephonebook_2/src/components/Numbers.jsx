const Numbers = ({ contacts }) => {
  return (
    <section className="contacts">
      <h2>Contacts</h2>
      {contacts.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </section>
  );
};

export default Numbers;