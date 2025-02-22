import React from "react";
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from "react";
import posts from "../data/posts"

function PostContent() {

    const { count } = useContext(GlobalContext);
    console.log(count);
    return (
        <>
            <h1>Post List</h1>
            <ul>

                {posts.map((posts) => (
                    <li key={posts.id}>
                        <h2>{posts.title}</h2>
                        <p>{posts.content}</p>
                        <p>{posts.tags.join(', ')}</p>
                    </li>

                )
                )}

            </ul>
        </>
    )
}

export default PostContent