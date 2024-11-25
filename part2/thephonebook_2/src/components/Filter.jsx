const Filter = ({ filterContacts }) => {
  return (
    <section className="filter">
      <p>Filter shown with <input onChange={filterContacts} /></p>
    </section>
  )
};

export default Filter;