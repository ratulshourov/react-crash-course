import React, { Suspense, useState } from 'react';

function Country({country ,handleVisitedCountries}) {
    //console.log(handleVisitedCountries);
    
    const [visited, setVisited] = useState(false);
    const handleVisited=()=>{
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    const image={
        width:"50px",
        height:"auto"
    }
    const main={
        border:"2px solid red",
        padding:"10px",
        borderRadius:"10px",
        margin:"10px"
    }
    return (
        /**below class name used while one stat */
        <div className={` ${visited&& "country-vistited"}`} style={main}>
            <img src={country.media.flag} alt="No Image found" style={image}/>
           <p> Name:{country.name}</p> 
          
           <button onClick={handleVisited}>
            {visited?"visited":"Not Visited"}
            </button>
        
        </div>
    );
}

export default Country;