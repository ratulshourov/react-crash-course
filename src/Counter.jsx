import React, { useState } from 'react';

function Counter() {
    const [value, setValue] = useState(0);
    const handleClick=() =>{
        setValue(value+1);
    }
    const myStyle = {
        'border': '4px solid black'
    }

    return (
        <div>
            <h2 style={myStyle}>Counter value is{value}</h2>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default Counter;