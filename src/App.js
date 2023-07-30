import React, { useState, useEffect } from "react";
import axios from "axios";
import Beer from "./beer.js"; // adjust the path based on...

import './beer.css';

const App = () => {
  //state to hold the data recived from the API
  const [beerData, setBeerData] = useState([]);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
      //set the recived data into the state
      setBeerData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1> Beer List</h1>
      {/* user beerData to display the beer list */}

      {beerData.map((beer) => (
        <Beer key={beer.id} beer={beer}>{beer.name} </Beer>
      ))}
    </div>
  );
};
export default App;