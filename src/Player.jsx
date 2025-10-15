import React, { useState } from 'react';

function Player() {
    const [scores,setScores]=useState(0);
    const [sixes,setSixes]=useState(0);
    const handleSingleScores=()=>{
        const newScores=scores+1;
        setScores(newScores);
    }
    const handleSixScores=()=>{
        const newScores=scores+6;
        const updateSixes=sixes+1;
        setScores(newScores);
        setSixes(updateSixes);
    }
    return (
        <div>
            <h1>Bangladesh Score {scores}</h1>
            <h2>{scores>50 ?"fifty":""}
                <small>Total Sixes:{sixes}</small>
            </h2>
            <button onClick={handleSingleScores}>single</button>
            <button onClick={handleSixScores}>Six</button>
        </div>
    );
}

export default Player;