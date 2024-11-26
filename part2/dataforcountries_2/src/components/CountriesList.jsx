const CountriesList = ({ toDisplay, selectedCountries, chooseCountry}) => {
  return (
    <div>
      {toDisplay && toDisplay === "many" ? (<p>Too many matches, specify another filter</p>) :
      toDisplay === "all" ? (selectedCountries.map(c => 
        (<p key={c}>
          {c} <button id={c.split(" / ")[0]} onClick={chooseCountry}>view info</button>
        </p>)
      )) : ""}
    </div>
  );
}

export default CountriesList;