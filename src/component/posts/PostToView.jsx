import './PostToView.css'
import { Elipsis } from './elipsis';


const PostToView = ({ post }) => {

    return (
        <>

            <div className="to-post">
                {
                    post.picture ? <img src={post.picture} alt="post" /> : ""
                }
                {/* <img src={img} alt="blog" /> */}
                <p className='postToView-title'>{Elipsis(post.title, 90)}</p>
                <p className='description'>{Elipsis(post.description, 200)}    ...click to read more!</p>
                <div className="minor-post-details">
                    <p className='post-author'>By: {post.username}</p>
                </div>

            </div>


        </>
    )
}

export default PostToView;