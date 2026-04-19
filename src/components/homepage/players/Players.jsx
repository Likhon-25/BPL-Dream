import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin }) => {
  // console.log(playersPromise)
  const players = use(playersPromise);
  // console.log(players);
  const [selectedType, setSelectedType] = useState("available");
  console.log(selectedType, "SelectedType");

  return (
    <div className="container mx-auto my-[60px]">
      <div className="flex justify-between gap-4 items-center mb-[20px]">
        { selectedType === "available" ?  <h2 className="font-bold text-3xl">Available Players</h2> : <h2 className="font-bold text-3xl">Selected Players (2/7)</h2>}

        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>
            Available
          </button>
          <button
          onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>
            Selected(0)
          </button>
        </div>
      </div>

      {selectedType === "available" ? <AvailablePlayers players={players} setCoin={setCoin} /> : <SelectedPlayers />}
    </div>
  );
};

export default Players;
