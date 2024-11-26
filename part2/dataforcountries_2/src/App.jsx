import { useState, useEffect } from "react";

import axios from "axios";

import SearchBar from "./components/SearchBar";
import CountriesList from "./components/CountriesList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [toDisplay, setToDisplay] = useState(null);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
         .then(res => {
            setCountries(res.data.map(c => [c.name.common, c.name.official]));
         });
  }, []);

  const displayCountries = () => {
    const filteredCountries = countries.filter(([common, official]) => {
      return common.toLowerCase().includes(search.toLowerCase()) 
          || official.toLowerCase().includes(search.toLowerCase());
    }).map(name => name.join(" / "));
    console.log(filteredCountries);

    setSelectedCountries(filteredCountries);

    if (filteredCountries.length > 10)
      setToDisplay("many");
    else if (filteredCountries.length > 1)
      setToDisplay("all");
    else if (filteredCountries.length === 1)
      setToDisplay("display");
    else
    setToDisplay(null);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
    displayCountries();
  };

  return (
    <div>
      <SearchBar updateSearch={updateSearch} search={search} />
      {toDisplay && toDisplay === "many" ? (<p>Too many matches, specify another filter</p>) :
      toDisplay === "all" ? (selectedCountries.map(c => <p key={c}>{c}</p>)) :
      toDisplay === "display" ? (selectedCountries.map(c => <p key={c}>{c}</p>)) : ""}
    </div>
  );
};

export default App;
