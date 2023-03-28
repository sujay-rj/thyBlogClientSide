import './Login.css'
import { useState, useContext, useEffect } from 'react';
import img01 from '../images/pencil011.jpg';
import { userLogin } from '../../server/api.js';

import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';


const loginInitialValues = {
    username: '',
    password: ''
}
const Login = () => {

    const [error, setError] = useState('');
    const [login, setLogin] = useState(loginInitialValues);

     const { setAccount } = useContext(DataContext);
     const navigate = useNavigate();

     useEffect(() =>{
        localStorage.setItem('user-info', JSON.stringify(login));
    }, [login]);

     const onValueChange = (e) => {
         setLogin({ ...login, [e.target.name]: e.target.value });
     }

    

   

    const loginUser = async () =>{
        let response = await userLogin(login);
        if (response.status === 200) {
            setError('');
            setAccount({ username: response.data.username, name: response.data.name });
            navigate('/');
        }
        else {
                    setError(`Username or password doesn't match!`);
                     console.log(error);
                }
    }

    const toggleSignup = () => {
        navigate('/signup');
        }
    const imgLogin = img01;
    return (
        <>
        <Header />
            <section className='loginSection'>
                <div>
                    <img src={imgLogin} alt="login" className='loginImg' />
                </div>

                <div className='loginField'>
                    <p className='thyBlog'>thyBlog</p>
                    {error && <div style={{ color: "red", fontSize: 18, textAlign: 'center' }}>{error}</div>}
                    <input onChange={(e) => onValueChange(e)} name="username" placeholder='Enter username'></input>
                    <input onChange={(e) => onValueChange(e)} name="password" type="password" placeholder='Enter password'></input>


                    <button onClick={() => loginUser()} id='btn1' variant='contained'>Login</button>
                    <button onClick={() => toggleSignup()} id='btn2' className='createAccount'>Doesn't have account? Creat One </button>
                </div>

            </section>
        </>

    )
}

export default Login