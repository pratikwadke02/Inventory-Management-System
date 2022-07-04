import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import "../Auth/Login.css";
import {useDispatch} from 'react-redux'
import {signIn} from '../../actions/auth'

const {initialState} = {email: '', password: ''}


function Login() {
    const dispatch = useDispatch();
    const history = useNavigate();

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            console.log(data);
            dispatch(signIn(data, history));
		} catch (error) {
            console.log(error);
            setError(error);
		}
	};


  return (
    <>
    <div className="login_container">
        <div className="login_form_container">
            <div className="left">
                <form onSubmit={handleSubmit } className="form_container">
                    <h1>Login to your Account</h1>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className='input'
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className='input'
                    />
                    {error && <div className="error_msg">{error}</div>}
                    <button type='submit' className="green_btn">
                        Login
                    </button>
                </form>
            </div>
            <div className="right">
                <h2>Dont have an Account</h2>
                <Link to="/signup">
                    <button className='white_btn' type='button'>
                        Sign up
                    </button>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login