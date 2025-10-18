import React, { use, useState } from 'react';
import Country from './Country';

function Countries({countries}) {
    const countryData=use(countries);
    const [visitedCountries,setVisitedCountries]=useState([]);
    const  handleVisitedCountries=()=>{
        console.log("visited countries");
    }
    console.log(countryData);
    const main={
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"10px"
    }
    return (
        <div style={main}>
            {
                countryData.map(country=><Country handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
            }
        </div>
    );
}

export default Countries;