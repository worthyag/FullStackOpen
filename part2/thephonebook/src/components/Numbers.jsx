const Numbers = ({ contactsToShow }) =>{
  return (
    <section className="numbers">
      <h2>Numbers</h2>
      {contactsToShow.map(person => {
        return (
          <p key={person.name}>
            <span>{person.name} </span>
            <span>{person.number}</span>
          </p>
        )
      })}
    </section>
  );
};

export default Numbers;