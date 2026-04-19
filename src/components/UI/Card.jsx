import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Card = ({ player }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={player.playerImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser />
            {player.playerName}
          </h2>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <FaFlag />
              <p>{player.playerCountry}</p>
            </div>

            <button className="btn">{player.playerType}</button>
          </div>

          <div className="divider"></div>

          <h2>Rating:({player.rating})</h2>

          <div className="flex justify-between gap-4 font-bold">
            <p>{player.battingStyle}</p>
            <p className="text-right">{player.bowlingStyle}</p>
          </div>

          <div className="card-actions justify-between items-center">
            <p className="font-semibold">Price: ${player.price}</p>
            <button 
            className="btn" 
            onClick={() => setIsSelected(true)}
            disabled={isSelected}>
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
