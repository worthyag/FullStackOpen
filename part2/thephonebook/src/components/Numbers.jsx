const Numbers = ({ contactsToShow, deleteSelected }) =>{
  return (
    <section className="numbers">
      <h2>Numbers</h2>
      {contactsToShow.map(person => {
        return (
          <p key={person.name}>
            <span>{person.name} </span>
            <span>{person.number}</span>
            <button id={person.id} onClick={deleteSelected} className="del-btn">delete</button>
          </p>
        )
      })}
    </section>
  );
};

export default Numbers;