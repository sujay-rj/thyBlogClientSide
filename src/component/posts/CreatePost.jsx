import './CreatePost.css'
import { AddCircle } from '@mui/icons-material'
import { useContext, useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { DataContext } from '../../context/DataProvider';

import { postSave, uploadFile } from '../../server/api';
import Header from '../header/Header';
import Footer from '../header/Footer';



const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const {account} = useContext(DataContext);
    const navigate = useNavigate();


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

    const savePost = async () =>{
        let response = await postSave(post) ;
        
        if(response.status === 200){
            navigate('/');
        }
        else {
            navigate('/create');

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
                    post.picture ? <img src={post.picture} alt="post" /> : ""
                }

            </div>

            <div className="post-box">
                <form action="">

                    <label htmlFor="title"></label>
                    <input onChange={(e) => handleChange(e)} type="text" placeholder="what's the title ?" id='title' name='title' className='post-title' />

                    {/* blog content/ description */}
                    <label htmlFor="content"></label>
                    <textarea onChange={(e) => handleChange(e)} id='content' name='description' className='post-content'  placeholder='write here...'>
                    </textarea>

                    {/* image */}
                    <div className='create-post-add'>
                        <label htmlFor="fileInput" className='post-image'><AddCircle fontSize='large' color='action' /><h3>Add image</h3></label>
                        <input onChange={(e) => setFile(e.target.files[0])} type="file" id='fileInput' style={{ display: 'none' }} />

                        {/* <button onClick={() => savePost()} className='publish-btn' id='publish-btn' >Publish</button> */}
                        <Link onClick={() => savePost()} className='publish-btn' id='publish-btn'>Publish</Link>
                    </div>


                </form>
            </div>
           
            <Footer />
        </>
    )
}

export default CreatePost;