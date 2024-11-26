import { useState, useEffect } from "react";

import axios from "axios";

import SearchBar from "./components/SearchBar";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

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
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
    displayCountries();
  };

  return (
    <div>
      <SearchBar updateSearch={updateSearch} search={search} />
    </div>
  );
};

export default App;
