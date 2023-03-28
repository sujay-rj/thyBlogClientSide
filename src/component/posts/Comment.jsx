
import {Delete} from '@mui/icons-material';
import './Comment.css'
// import { useContext } from 'react';

// import { DataContext } from "../../context/DataProvider";
import { deleteComment } from '../../server/api';

const Comment = ({comment, setToggle }) =>{

    let user = JSON.parse(localStorage.getItem('user-info'));

    // const {account} = useContext(DataContext);
   
    const removeComment = async() =>{
        let response = await deleteComment(comment._id);
        if(response.status === 200){
            setToggle(prevState => !prevState);
        }
        
    }

    return(
        <>
        <div className='commentClass'>
            
            <div className="commentDetail">
                <p className='commentUser'>{comment.name}</p>
               
                {user && comment.name === user.username && <Delete className='commentDeleteIcon'  style={{color:"red"}} onClick={()=>removeComment()} />}
            
            </div>
            <p className='commentDate'>{new Date(comment.date).toDateString()}</p>

            <div className="actualComment">
                <p>{comment.comments}</p>
            </div>
        </div>
        </>
    )
}

export default Comment;