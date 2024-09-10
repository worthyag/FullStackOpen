import { useState, useEffect } from "react";
import axios from "axios";

import FindCountry from "./components/FindCountry";
import DisplayCountryInfo from "./components/DisplayCountryInfo";

const App = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
      .then(response => {
        console.log(response.data);
      })
  }, [country]);

  const handleChange = (event) =>{
    setCountry(event.target.value);
  }

  return (
    <div>
      <FindCountry
        country={country}
        handleChange={handleChange}
      />
      <DisplayCountryInfo />
    </div>
  );
};

export default App;