import { Link, useNavigate } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import React from 'react';
import './Header.css';
// import './script'



const Header = () => {

    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    const hamburgerFun = () => {
        var x = document.getElementById('burgerMenu');
        var y = document.getElementById('closeMenuIcon')
        var z = document.getElementById('hamMenuIcon')

        x.style.display = "flex";
        x.style.flexDirection = "column"
        y.style.display = "flex";
        z.style.display = "none"


    }

    const closeFun = () => {
        var x = document.getElementById('burgerMenu');
        var y = document.getElementById('closeMenuIcon')
        var z = document.getElementById('hamMenuIcon')

        x.style.display = "none"
        y.style.display= "none"
        z.style.display = "flex"
    }

    return (

        <>
            <header className='container'>
                <div className="hamMenuIcon" id='hamMenuIcon'>
                    <button onClick={hamburgerFun} id='hamburgerMenu'>
                        <MenuRoundedIcon fontSize='large' style={{color: "black"}} className='hamburgericon' />
                    </button>
                </div>
                <div className="closeMenuIcon" id='closeMenuIcon'>
                    <button onClick={closeFun} id='hamburgerMenu' fontSize='large' style={{color: "black"}}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="homeIcon" id='burgerMenu'>
                    <Link to="/">HOME</Link>
                    {/* <Link to="/" >BLOGS</Link> */}
                    
                    <Link to="/create">CREATE</Link>
                    {/* <Link to="/about">ABOUT</Link> */}
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/" onClick={logout}>LOGOUT</Link>

                            </>
                            :
                            <>
                                <Link to="/login">LOGIN</Link>
                                <Link to="/signup">SIGNUP</Link>
                            </>
                    }



                </div>
                <div className="userHead">
                    {
                        localStorage.getItem('user-info') ?
                            <p className='userHeadName'>Hey {user && user.username}!</p>
                            :
                            <p className='userHeadName'>Hey Stranger!</p>
                    }
                </div>



            </header>


        </>
    )
}


export default Header
