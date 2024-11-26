const CountriesList = ({ toDisplay, selectedCountries}) => {
  return (
    <div>
      {toDisplay && toDisplay === "many" ? (<p>Too many matches, specify another filter</p>) :
      toDisplay === "all" ? (selectedCountries.map(c => <p key={c}>{c}</p>)) : ""}
    </div>
  );
}

export default CountriesList;