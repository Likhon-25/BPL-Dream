import React, { use } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    // console.log(playersPromise)
    const players = use(playersPromise);
    // console.log(players);
    return (
        <div className='container mx-auto'>
            Players: {players.length}

            <AvailablePlayers players={players} />
        </div>
    );
};

export default Players;