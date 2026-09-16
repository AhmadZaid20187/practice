import React from 'react';

const Todo = ({ name }) => {
    console.log(name)
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Todo;