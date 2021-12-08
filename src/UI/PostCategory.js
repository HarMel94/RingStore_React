import React from 'react';
import "./PostCategory.css"

function PostCategory({post}) {
    return (
        <div className="postCategorys">
            {post.map((post) => 
                <div key={Math.random()}>
                    {post.body}
                </div>
            )}
        </div>
    );
}

export default PostCategory;