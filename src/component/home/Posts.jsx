import { useState, useEffect } from "react";
import { getAllPosts } from "../../server/api";
import PostToView from "../posts/PostToView";
import { Link } from 'react-router-dom'
import './Posts.css'
const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getAllPosts();
            if (response.status === 200) {
                setPosts(response.data);
            }
        }
        fetchData();
    }, []);


    return (
        <>
            {/* <h2>Populer posts</h2> */}

            {
                posts && posts.length > 0 ? posts.map(post => (
                    <div className="home-posts">
                        <Link to={`details/${post._id}`}>
                            <PostToView post={post} />
                            
                        </Link>
                    </div>
                ))
                    :
                    <div>There are no posts to display</div>
            }
        </>
    )
}

export default Posts;