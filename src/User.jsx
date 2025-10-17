import React, { use } from 'react';
import SingleUser from './SingleUser';

function User({fetchUsers}) {
    const userList=use(fetchUsers);
    console.log(userList);
    
    return (
        <div className='card'>
            <h1>All Users{userList.length}</h1>
            {
                userList.map(
                    user=><SingleUser data={user}></SingleUser>
                )
            }
        </div>
    );
}

export default User;