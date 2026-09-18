import React from 'react';

const Actor = ({ actor }) => {
    console.log(actor)
    return (
        <div className='flex flex-col pt-4 justify-center'>
            <li>Actor name: {actor.name}</li>
            <li>Age: {actor.age}</li>
        </div>
    );
};

export default Actor;