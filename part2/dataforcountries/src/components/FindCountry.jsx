const Feedback = ({ isCountry }) => {
  if (isCountry) {
    return null
  } 

  return (
    <p>Not specific enough!</p>
  );
}

const FindCountry = ({ country, handleChange, isCountry }) => {
  const styleObj = {
    marginLeft: "12px"
  }

  return (
    <div>
      <p>
        <span>find countries</span>
        <input
          style={styleObj}
          onChange={handleChange}
          value={country}
        />
      </p>
      <Feedback isCountry={isCountry} />
    </div>
  );
};

export default FindCountry;