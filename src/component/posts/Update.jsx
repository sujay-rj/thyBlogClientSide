import './CreatePost.css'
import { AddCircle } from '@mui/icons-material'
import { useContext, useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

import { DataContext } from '../../context/DataProvider';

import { getPostById, updatePost, uploadFile } from '../../server/api';
import Header from '../header/Header';



const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const Update = () => {

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const {account} = useContext(DataContext);
    const navigate = useNavigate();
    const { id } = useParams();


useEffect(() =>{
    const fetchData = async () =>{
        let response = await getPostById(id);

        if(response.status === 200){
            setPost(response.data);
        }
    }
    fetchData();
},[])

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const response = await uploadFile(data);
                post.picture = response.data;
            }
        }
        getImage();
        post.categories = 'Music';
        post.username = account.username;
    }, [file])

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const updateBlogPost = async () =>{
       
        let response = await updatePost(post) ;
        console.log(response);
        
        if(response.status === 200){
            navigate(`/details/${id}`);
        }
        else {
            navigate('/create');
            console.log(`else in savePost`);
        }
    }

    return (
        <>
        <Header />
            <div className="slogan">
                <p>Read Write Spread!</p>
            </div>
            <div className='post-default-image'>
                {/* <img src={url} alt="img" /> */}
                {
                    post.picture ? <img src={post.picture} alt="post"/> : ""
                }
            </div>

            <div className="post-box">
                <form action="">

                    <label htmlFor="title"></label>
                    <input onChange={(e) => handleChange(e)} type="text" value={post.title} placeholder="what's the title ?" id='title' name='title' className='post-title' />

                    {/* blog content/ description */}
                    <label htmlFor="content"></label>
                    <textarea value={post.description} onChange={(e) => handleChange(e)} id='content' name='description' className='post-content' rows='20' cols='70' placeholder='write here...'>
                    </textarea>

                    {/* image */}
                    <div className='create-post-add'>
                        <label htmlFor="fileInput" className='post-image'><AddCircle fontSize='large' color='action' /><h3>Add image</h3></label>
                        <input onChange={(e) => setFile(e.target.files[0])} type="file" id='fileInput' style={{ display: 'none' }} />

                        {/* <button onClick={() => savePost()} className='publish-btn' id='publish-btn' >Publish</button> */}
                        <Link onClick={() => updateBlogPost()} className='publish-btn' id='publish-btn'>Update</Link>
                    </div>


                </form>
            </div>
           
        
        </>
    )
}

export default Update;