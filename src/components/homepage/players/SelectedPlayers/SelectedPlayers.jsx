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
    setCoin(coin + Players.price);
  };
  return (
    <div>
      <div className="space-y-4">
        {selectedPlayers.length === 0 ? (
          <div className="h-[400px] flex items-center justify-center flex-col gap-4">
            <h2 className="font-semibold text-2xl">No player selected yet</h2>
            <p>Go to available tab and select players</p>
          </div>
        ) : (
          selectedPlayers.map((Players, ind) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
