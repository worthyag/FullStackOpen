import FormInput from "./FormInput";

const AddContacts = (props) => {
  const {addPerson, handleNewName, newName, handleNewNumber, newNumber} = props;
  return (
    <section className="addContacts">
      <h2>Add New Contact</h2>
      <form onSubmit={addPerson}>
        <FormInput value={newName} handleValue={handleNewName} label={"name"} />
        <FormInput value={newNumber} handleValue={handleNewNumber} label={"number"} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {/* <div className="debug">debug: {newName} {newNumber}</div> */}
    </section>
  );
};

export default AddContacts;