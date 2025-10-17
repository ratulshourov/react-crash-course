import React from 'react';

function Country({country}) {
    const {name}=country;
    return (
        <div>
            {name}
        </div>
    );
}

export default Country;