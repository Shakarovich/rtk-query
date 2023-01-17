import React from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps{
    post: IPost;
    update?: (post: IPost) => void;
}

const PostItem: React.FC<PostItemProps> = ({post}) => {
    return (
        <div style={{width:"400px", padding:"10px", border:"1px solid gray", gap:"1rem", display:"flex"}}>
            <h1 style={{textDecoration:"underline", fontSize:"14px"}}>{post.id}{post.title}</h1>
            <p style={{textDecoration:"underline", fontSize:"14px"}}>{post.body}</p>
            <button>DELETE</button>
        </div>
    );
};

export default PostItem;
