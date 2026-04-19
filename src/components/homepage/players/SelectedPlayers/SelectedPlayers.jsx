import React from "react";
import Players from "../Players";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
}) => {
  console.log(selectedPlayers, "selectedPlayers");
  const handleDeleteSelectedPlayers = (Players) => {
    console.log(setSelectedPlayers, "setSelectedPlayers");

    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== Players.playerName,
    );
    console.log(filteredPlayers, "filteredPlayers");
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + Players.price)
  };
  return (
    <div>
      <div className="space-y-4">
        {selectedPlayers.map((Players, ind) => {
          return (
            <div
              key={ind}
              className="flex items-center gap-6 justify-between p-10 rounded-2xl border"
            >
              <div className="flex items-center gap-4">
                <img
                  src={Players.playerImage}
                  alt=""
                  className="h-[75px] w-auto rounded-md"
                />

                <div>
                  <h2 className="flex items-center gap-2 font-semibold text-xl">
                    <FaUser /> {Players.playerName}
                  </h2>
                  <p>{Players.playerType}</p>
                </div>
              </div>

              <button
                className="btn text-red-500"
                onClick={() => handleDeleteSelectedPlayers(Players)}
              >
                <MdDelete />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedPlayers;
