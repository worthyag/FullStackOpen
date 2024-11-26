import { useState, useEffect } from "react";

import axios from "axios";

import SearchBar from "./components/SearchBar";
import CountriesList from "./components/CountriesList";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [toDisplay, setToDisplay] = useState(null);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [displayCountry, setDisplayCountry] = useState(null);
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(res => {
        setCountries(res.data.map(c => [c.name.common, c.name.official]));
      });

    if (displayCountry) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${displayCountry}`)
        .then(res => {
          const countryObj = {
            name: res.data.name.common,
            capital: res.data.capital,
            area: res.data.area,
            population: res.data.population,
            languages: Object.values(res.data.languages),
            imgUrl: res.data.flags.png,
            alt: res.data.flags.alt,
          };

          setCountryInfo(countryObj);
        })

    }
  }, [displayCountry]);

  const displayCountries = () => {
    const filteredCountries = countries.filter(([common, official]) => {
      return common.toLowerCase().includes(search.toLowerCase()) 
          || official.toLowerCase().includes(search.toLowerCase());
    }).map(name => name.join(" / "));
    // console.log(filteredCountries);

    setSelectedCountries(filteredCountries);

    if (filteredCountries.length > 10)
      setToDisplay("many");
    else if (filteredCountries.length > 1)
      setToDisplay("all");
    else if (filteredCountries.length === 1) {
      setToDisplay("display");
      setDisplayCountry((filteredCountries[0].split(" / "))[0]);
    }
    else
      setToDisplay(null);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
    displayCountries();
  };

  const refresh = () => {
    setSearch("");
    setToDisplay(null);
    setSelectedCountries([]);
    setDisplayCountry(null);
    setCountryInfo({});
  };

  const chooseCountry = (event) => {
    console.log("You clicked me!");
    console.log(event.target.id);
    
    
    setDisplayCountry(event.target.id);
  };

  return (
    <div>
      <SearchBar updateSearch={updateSearch} search={search} /> 
      <button onClick={refresh}>refresh</button>
      <CountriesList 
        toDisplay={toDisplay} 
        selectedCountries={selectedCountries}
        chooseCountry={chooseCountry}
      />
      {(displayCountry) ? 
        <CountryInfo 
          name={countryInfo.name}
          capital={countryInfo.capital}
          area={countryInfo.area}
          population={countryInfo.population}
          languages={countryInfo.languages}
          imgUrl={countryInfo.imgUrl}
          alt={countryInfo.alt}
        /> 
        : ""
      }
    </div>
  );
};

export default App;
