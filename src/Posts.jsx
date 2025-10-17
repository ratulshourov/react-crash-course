import React, { use } from 'react';
import Post from './Post';

function Posts({postPromise}) {
    const allPost=use(postPromise);
    return (
        <div className='card'>
            <h3>All Posts</h3>
            {
                allPost.map(post=><Post apost={post}></Post>)
            }
        </div>
    );
}

export default Posts;