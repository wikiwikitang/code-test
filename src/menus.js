import React, { useState, useEffect } from "react";
import Details from "./details";

export default ({ isLoading, categories }) => {
  if (isLoading) {
    return <div>Menus is Loading</div>;
  }

  const [details, setDetails] = useState(null);
  const [isShowing, setIsShowing] = useState(false);

  const fetchDetails = async short_name => {
    const response = await fetch(
      `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`
    );
    const detail = await response.json();
    setDetails(detail);
    setIsShowing(true);
    console.log(details);
    console.log(isShowing);
  };

  const menus = categories.map(
    ({ name, short_name }, index) => {
      return (
        <li
          key={index}
          onClick={() => fetchDetails(short_name)}
        >
          {name}-({short_name})
        </li>
      );
    }
  );

  const menuDetails = () => {
    console.log(isShowing, details);
  };

  return (
    <div>
      <ul>{menus}</ul>
      <Details isShowing={isShowing} details={details} />
    </div>
  );
};
