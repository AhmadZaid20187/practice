"use client"

import React, { useState } from 'react';

const Count = () => {

    const [count, setCount] = useState(0)

    const handleCount = () => {
        const newCount = count + 1
        setCount(newCount);
    }

    return (
        <div className='p-5 px-30 rounded-2xl mb-5 border border-white'>
            <h3>Count: {count}</h3>
            <button className='bg-white text-black p-2 rounded-2xl mt-5 transition-transform duration-150 active:scale-90' onClick={handleCount}>Click</button>
        </div>
    );
};

export default Count;