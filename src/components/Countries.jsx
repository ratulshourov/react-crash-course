import React, { use } from 'react';
import Country from './Country';

function Countries({countries}) {
    const countryData=use(countries);
    console.log(countryData);
    const main={
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"10px"
    }
    return (
        <div style={main}>
            {
                countryData.map(country=><Country country={country}></Country>)
            }
        </div>
    );
}

export default Countries;