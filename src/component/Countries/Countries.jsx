import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ countriesPromise }) => {
  // const [totalVisitedCountry, setTotalVisitedCountry] = useState([]);

  // const handleVisitedCountry = (country) => {
  //   console.log("clicked", country);
  // };

  const [totalVisitedCountry, setTotalVisitedCountry] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountry = (country) => {
    console.log("clicked", country);
    const newVisitedCountry = [...totalVisitedCountry, country];
    setTotalVisitedCountry(newVisitedCountry);
  };
  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>Total Country: {countries.length}</h1>
      <h3>Total Country Visited:{totalVisitedCountry.length}</h3>
      <h3>Total Flags Visited: {visitedFlags.length}</h3>
      <div className="visited-flags">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag} />
        ))}
      </div>

      <ol>
        {totalVisitedCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            // handleVisitedCountry={handleVisitedCountry}

            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
