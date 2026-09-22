'use client'

import React, { useState, useEffect } from 'react';

const Btn = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Count is:", count);
    }, [count]);
    return (
        <div>
            <button className='btn' onClick={() => setCount(count + 1)}>
                {count}
            </button>
        </div>
    );
};

export default Btn;