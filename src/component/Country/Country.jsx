import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country.area.area);
  const handleClick = () => {
    console.log(country.name.common);
    alert(country.name.common);
  };
  return (
    <div className="card">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h4>Name: {country.name.common} </h4>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 200000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleClick}>Visit</button>
    </div>
  );
};

export default Country;
