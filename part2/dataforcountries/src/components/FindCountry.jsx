const FindCountry = ({ country, handleChange }) => {
  const styleObj = {
    marginLeft: "12px"
  }

  return (
    <p>
      <span>find countries</span> 
      <input 
        style={styleObj}
        onChange={handleChange} 
        value={country} 
      />
    </p>
  );
};

export default FindCountry;