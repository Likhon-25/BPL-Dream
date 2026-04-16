import React, { use } from 'react';

const Players = (playersPromise) => {
    console.log(playersPromise)
    const data = use(playersPromise);
    console.log(data);
    return (
        <div>
            Players
        </div>
    );
};

export default Players;