import { useState, useEffect } from "react";
import axios from "axios";

import FindCountry from "./components/FindCountry";
import DisplayCountryInfo from "./components/DisplayCountryInfo";

const App = () => {
  const [country, setCountry] = useState("France");
  const [displayedCountry, setDisplayedCountry] = useState({});

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
      .then(response => {
        console.log(response.data);

        const countryObj = {
          name: response.data.name.common,
          capital: response.data.capital,
          area: response.data.area,
          languages: Object.values(response.data.languages),
          imgUrl: response.data.flags.png,
          alt: response.data.flags.alt,
        };

        setDisplayedCountry(countryObj);
      })
  }, [country]);

  const handleChange = (event) =>{
    setDisplayedCountry({})
    setCountry(event.target.value);
  }

  return (
    <div>
      <FindCountry
        country={country}
        handleChange={handleChange}
      />
      <DisplayCountryInfo
        name={displayedCountry.name}
        capitals={displayedCountry.capital}
        area={displayedCountry.area}
        languages={displayedCountry.languages}
        imgUrl={displayedCountry.imgUrl}
        alt={displayedCountry.alt}
      />
    </div>
  );
};

export default App;