import './Login.css'
import img01 from '../images/pencil011.jpg';
import { useState} from 'react';
import { userSignup } from '../../server/api.js';
import { useNavigate } from 'react-router-dom';
const imgLogin = img01;


const signupInitialValues = {
    name: '',
    username: '',
    password: ''
}

const Signup = () => {
    const [error, setError] = useState('');
    const [signup, setSignup] = useState(signupInitialValues);
    const navigate = useNavigate();

    const signupUser = async () => {
        let response = await userSignup(signup);
        if (response.status === 200) {
            setError('');
            setSignup(signupInitialValues);
            navigate('/login');

        } else {

            setError('Something went wrong! Please try again.');

        }
    }

    const toggleSignup = () => {
        navigate('/login');
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div>
                <img src={imgLogin} alt="login" className='loginImg' />
            </div>
            <div className='loginField'>
                <p className='thyBlog'>thyBlog</p>
                {error && <div style={{ color: "red", fontSize: 18, textAlign: 'center' }}>{error}</div>}
                <input onChange={(e) => onInputChange(e)} name='name' placeholder='Enter name'></input>
                <input onChange={(e) => onInputChange(e)} name='username' placeholder='Enter username'></input>
                <input onChange={(e) => onInputChange(e)} name='password' placeholder='Enter password'></input>


                <button onClick={() => signupUser()} id='btn1' variant='contained'>Signup</button>
                <button onClick={() => toggleSignup()} id='btn2' className='createAccount'>Already have account ! Login</button>
            </div>
        </>
    )
}

export default Signup;