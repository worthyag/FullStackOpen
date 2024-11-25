const FormInput = ({ value, handleValue, label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}: </label>
      <input
        id={label}
        value={value}
        onChange={handleValue}
      />
    </div>
  );
};

export default FormInput;