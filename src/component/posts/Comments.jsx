
import { useEffect, useState } from 'react'
import { getAllComments, newComment } from '../../server/api';
import Comment from './Comment';

import './Comments.css'

const initialValues = {
    name: '',
    postId: '',
    comments: '',
    date: new Date()
}


const Comments = ({ post }) => {



    let user = JSON.parse(localStorage.getItem('user-info'));
    const url = 'https://static.thenounproject.com/png/12017-200.png'



    const [comment, setComment] = useState(initialValues);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await getAllComments(post._id);
            if(response.status === 200){
                setComments(response.data);
            }
        }
        getData();
    }, [post, toggle]);

    


    const handleChange = (e) => { 
        if(!user){
            alert(`login to comment`);    
        }  else{
        setComment({
            ...comment,
            name: user.username,
            postId: post._id,
            comments: e.target.value
        })
    }
    }

    const addComment = async (e) => {
        if(!user){
            alert(`login to comment`);
            // navigate('../../login')
        } else{
        let response = await newComment(comment);
        if (response.status === 200) {
            setComment(initialValues);
        }
        setToggle(prevState => !prevState);
    }
    }


    return (
        <>
            <p className='commentHead'>What others are saying...</p>
            <div className="writeComment" id='writeComment'>

                <img src={url} alt="dp" />
                <label htmlFor="comment"></label>
                <textarea onChange={(e) => handleChange(e)} name="comment" rows='2' cols='50' placeholder="say something !"></textarea>
                <button onClick={(e) => addComment(e)}>Comment</button>
            </div>
            <div className="showComment">
                {
                    comments && comments.length > 0 && comments.map(cmt =>(
                        <Comment comment={cmt} setToggle={setToggle}/>
                    
                    ))
                }
            </div>
        </>
    )
}

export default Comments;