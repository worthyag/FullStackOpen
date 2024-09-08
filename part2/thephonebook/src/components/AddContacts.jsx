import FormInput from "./FormInput";

const AddContacts = (props) => {
  const { addPerson, 
          newName, 
          handleAddName, 
          newNumber, 
          handleAddNumber } = props;
  return (
    <section className="add-contacts">
        <h2>Add a new contact</h2>
        <form onSubmit={addPerson}>
          <FormInput value={newName} handleValue={handleAddName} label={"name"} />
          <FormInput value={newNumber} handleValue={handleAddNumber} label={"number"} />
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <div className="debug">debug: {newName} {newNumber}</div>
    </section>
  );
};

export default AddContacts;