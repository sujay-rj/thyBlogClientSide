

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost, getPostById } from "../../server/api";
import Header from '../header/Header'
import { DataContext } from '../../context/DataProvider'

import './DetailView.css'
import { Edit, Delete } from '@mui/icons-material';
import Comments from "./Comments";
import Footer from "../header/Footer";


const Detailview = () => {
    const { account } = useContext(DataContext);
    const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            let response = await getPostById(id);
            if (response.status === 200) {
                setPost(response.data);
            }
        }
        fetchData();
    }, []);

    const deleteBlog = async () => {
        let response = await deletePost(post._id)
        if (response.status === 200) {
            navigate('/')
        }
    }

    return (
        <>
            <Header />
            <div className="detailed-view">
                {
                    post.picture ? <img src={post.picture} alt="post" /> : ""
                }
                {/* <img src={url} alt="" /> */}
                {
                    account.username === post.username &&
                    <div className="detailed-view-grp1">
                        <div className="detailed-view-edit">
                            <Link to={`/update/${post._id}`}>
                                <Edit fontSize="small" />
                            </Link>
                        </div>
                        <div className="detailed-view-delete">
                            <Delete onClick={() => deleteBlog()} color="error" fontSize="small" />
                        </div>
                    </div>
                }

                <div className="detailed-view-content">
                    <p className="detailed-view-title">{post.title}</p>
                    <p className="detailed-view-description">{post.description}</p>
                    <div className="detailed-view-grp2">
                        <p className="detailed-view-username">-by {post.username}</p>
                        <p className="detailed-view-date">{new Date(post.createdDate).toDateString()}</p>
                    </div>
                </div>
            </div>

            <Comments post={post}/>
            <Footer />
        </>

    )
}

export default Detailview;