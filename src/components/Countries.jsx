import React, { use, useState } from 'react';
import Country from './Country';

function Countries({countries}) {
    const countryData=use(countries);
    const [visitedCountries,setVisitedCountries]=useState([]);
    const  handleVisitedCountries=(country)=>{
        console.log("visited countries",country);
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
        console.log(visitedCountries);
    }
    console.log(countryData);
    const main={
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"10px"
    }
    return (
        <div>
            <p>visited countries:{visitedCountries.length}</p>
            <ol>
                {
                    visitedCountries.map(singleVisitCountry=> <li>{singleVisitCountry.name}</li>)
                }
            </ol>
        <div style={main}>
            {
                countryData.map(country=><Country handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
            }
        </div>
        </div>
    );
}

export default Countries;