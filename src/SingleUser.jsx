import React from 'react';

function SingleUser({data}) {
    console.log("usessar",data);
    
    
    const {name,email}=data;
    return (
        <div className='card'>
            <h1>Name:{name}</h1>
            <h1>Email:{email}</h1>
        </div>
    );
}

export default SingleUser;