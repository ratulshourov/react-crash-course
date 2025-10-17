import React from 'react';

function Post({apost}) {
    const {title,body}=apost;
    return (
        <div className='card'>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
}

export default Post;