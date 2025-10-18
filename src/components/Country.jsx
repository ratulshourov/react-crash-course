import React, { Suspense } from 'react';

function Country({country}) {
    const image={
        width:"50px",
        height:"50px"
    }
    const main={
        border:"2px solid red",
        padding:"10px",
        borderRadius:"10px",
        margin:"10px"
    }
    return (
        <div style={main}>
           <p>Name:{country.name}</p> 
           <img src={country.media.flag} alt="No Image found" style={image}/>
        </div>
    );
}

export default Country;