'use client'

import React, { useState } from 'react';

const PlayerRuns = () => {
    const [runs, setRuns] = useState(0);
    const [single, setSingle] = useState(0);
    const [double, setDouble] = useState(0);
    const [four, setFour] = useState(0);
    const [six, setSix] = useState(0);


    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
        setSingle(single + 1)
    }
    const handleDouble = () => {
        const updatedRuns = runs + 2;
        setRuns(updatedRuns)
        setDouble(double + 1)
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns)
        setFour(four + 1)
    }

    const handleSixs = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns)
        setSix(six + 1)
    }
    const handleZero = () => {
        // const updatedRuns = runs + 6;
        setRuns(0)
        setSingle(0)
        setDouble(0)
        setFour(0)
        setSix(0)
    }



    return (
        <div className='p-7 border border-amber-100 m-5 rounded-2xl px-30'>
            <h1>Player: Bangladesh</h1>

            <div className='p-3 flex items-center space-x-3'>
                <p className='text-2xl'>Total Runs: {runs}</p>
                <p>Single Runs: {single}</p>
                <p>Double Runs: {double}</p>
                <p>Four Runs: {four}</p>

                <p>Six Runs: {six}</p>
            </div>


            <div className='space-x-4'>
                <button className='bg-purple-300 text-black p-3 px-4 rounded-2xl mt-5 transition-transform duration-150 active:scale-90' onClick={handleSingle}>Single Run</button>

                <button className='bg-purple-300 text-black p-3 px-4 rounded-2xl mt-5 transition-transform duration-150 active:scale-90' onClick={handleDouble}>Double Run</button>

                <button className='bg-purple-300 text-black p-3 px-4 rounded-2xl mt-5 transition-transform duration-150 active:scale-90' onClick={handleFour}>Four Run</button>

                <button className='bg-purple-300 text-black p-3 px-4 rounded-2xl mt-5 transition-transform duration-150 active:scale-90' onClick={handleSixs}>Six Run</button>

                <button className='bg-red-300 text-black p-3 px-4 rounded-2xl mt-5 transition-transform duration-150 active:scale-90' onClick={handleZero}>Set to 0</button>
            </div>
        </div>
    );
};

export default PlayerRuns;