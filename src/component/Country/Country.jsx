import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  //   console.log(country.area.area);
  // console.log(handleVisitedCountry);
  // console.log(handleVisitedCountry);

  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    // setVisited(visited ? false : true);
    setVisited(!visited);
    // handleVisitedCountry(country);
    handleVisitedCountry(country);
  };
  return (
    <div className={`card ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h4>Name: {country.name.common} </h4>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 200000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleClick}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleVisitedFlag(country.flags.flags.png)}>
        Add visited flags
      </button>
    </div>
  );
};

export default Country;
