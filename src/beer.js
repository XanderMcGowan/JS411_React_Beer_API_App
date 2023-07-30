import React, { useState} from "react";
// import React from "react";

const Beer = ({ beer }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="beer_card">
      <h2>{beer.name}</h2>
      <p class = "tagline">Tagline: {beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p class = "scrip">Description: {beer.description}</p>
      <p>ABV (Alcohol By Volume): {beer.abv}%</p>
      <p>IBU (International Bittereness Units): {beer.ibu}</p>
      <p>Food Pairing:</p>
      <ul>
        {beer.food_pairing.map((pairing, index) => (
          <li key={index}>{pairing}</li>
        ))}
      </ul>
      <img src={beer.image_url} alt={beer.name} style={{ width: "100px" }} />
      <div>
    
        <button onClick={handleLike}>Like</button>
        
        <span>{likes} Likes</span>
      </div>
    </div>
  );
};

export default Beer;