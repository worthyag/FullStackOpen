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

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <SearchBar updateSearch={updateSearch} search={search} />
  );
};

export default App;
