const CountryInfo = (props) => {
  const { name, capitals = [], area, population, languages = [], imgUrl, alt } = props;
  // const { name, capitals, area, languages, imgUrl, alt } = props;

  console.log(props);
  

  return (
    <div>
      <h1>{name}</h1>
      <img src={imgUrl} alt={alt} />
      <h4>Languages</h4>
      <ul>
        {languages.length > 0 ? (
          languages.map(language => {
            return <li key={name}>{language}</li>
          })
        ) : (
          <li>No languages available</li>
        )}
      </ul>
      <p>population: {population}</p>
      <p>area: {area}</p>
      <p>
        capital: {capitals.length > 0 ? (
          capitals.map(capital => (
            <span key={capital}>{capital}</span>
          ))
        ) : (
          <span>No capital available</span>
        )}
      </p>
    </div>
  );
};

export default CountryInfo;