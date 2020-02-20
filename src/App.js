import React, { useState, useEffect } from "react";
import Menus from "./menus";

import "./App.css";

function App() {
  const [categories, setCategories] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://stream-restaurant-menu-svc.herokuapp.com/category"
      );
      console.log(response);
      const cats = await response.json();
      setCategories(cats);
      setIsloading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div>Menu Categories</div>
      <Menus
        isLoading={isLoading}
        categories={categories}
      />
    </div>
  );
}

export default App;
