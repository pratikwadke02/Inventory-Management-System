import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import "../Auth/Signup.css";
function Signup() {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]:input.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:5000/api/auth/signup";
            const {data: res} = await axios.post(url, data);
            navigate("/login");
            console.log(res.message);
        }catch(error){
            if(
                error.respone &&
                error.response.data &&
                error.response.data.message
            ){
                setError(error.response.data.message);
            }
        }
    };

  return (
    <div className="signup_container">
        <div className="signup_form_container">
            <div className="left">
                <h1>Welcome Back</h1>
                <Link to="/login">
                    <button className="green_btn">
                        Sign in
                    </button>
                </Link>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit} className="form_container">
                    <h1>Create Account</h1>
                    <input 
                        type="text"
                        placeholder='Username'
                        name="username"
                        onChange={handleChange}
                        value={data.username}
                        required
                        className='input' 
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className='input'
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className='input'
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        name="confirmPassword"
                        onChange={handleChange}
                        value={data.confirmPassword}
                        required
                        className='input'
                    />
                    {error && <div className='error_msg'>
                        {error}</div>}
                    <button type='submit' className='white_btn'>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup