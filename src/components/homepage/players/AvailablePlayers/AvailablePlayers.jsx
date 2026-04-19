import React from "react";
import Card from "../../../UI/Card";

const AvailablePlayers = ({
  players,
  setCoin,
  coin,
  setSelectedPlayers,
  selectedPlayers,
}) => {
  // console.log(players, "players");
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player, ind) => {
          // console.log(player);
          return (
            <Card
              key={ind}
              player={player}
              setCoin={setCoin}
              coin={coin}
              setSelectedPlayers={setSelectedPlayers}
              selectedPlayers={selectedPlayers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;

// import React from "react";
// import Card from "../../../UI/Card";

// const AvailablePlayers = ({ players }) => {
//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {players.map((player) => {
//           return <Card key={player.playerId || player.id} player={player} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default AvailablePlayers;
