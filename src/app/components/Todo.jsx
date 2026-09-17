import React from 'react';

const Todo = ({ name, isDone }) => {
    // console.log(name)
    // return (
    //     <div>
    //         <li>{name}</li>
    //     </div>
    // );

    if (isDone === true) {
        return (
            <li>{name} Done.</li>
        )
    } else {
        return (
            <li>Pending: {name}.</li>
        )
    }
};

export default Todo;