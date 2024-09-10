const DisplayCountryInfo = (props) => {
  const { name, capitals = [], area, languages = [], imgUrl, alt } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        capital: {capitals.length > 0 ? (
          capitals.map(capital => (
            <span key={capital}>{capital}</span>
          ))
        ) : (
          <span>No capital available</span>
        )}
      </p>
      <p>area: {area}</p>
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
      <img src={imgUrl} alt={alt} />
    </div>
  );
}

export default DisplayCountryInfo;