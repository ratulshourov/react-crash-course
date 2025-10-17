import React, { use } from 'react';
import Country from './Country';

function Countries({countries}) {
    const countryData=use(countries);
    console.log(countryData);
    
    return (
        <div>
            {
                countryData.map(country=><Country country={country}></Country>)
            }
        </div>
    );
}

export default Countries;