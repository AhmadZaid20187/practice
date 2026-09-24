'use client'

import React, { useEffect, useState } from 'react';

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setPlayers(data);
        };

        fetchPlayers();
    }, []);

    return (
        <div className=' border border-amber-200 py-10 px-30 rounded-2xl'>
            <h2 className='text-4xl'>Players: {players.length}</h2>
            {
                players.map(player => <div className='' key={player.id}>
                    <p className='pt-3'>Nmame: {player.name}</p>
                    <p>UserName: {player.username}</p>
                </div>)
            }
        </div>
    );
};

export default Players;