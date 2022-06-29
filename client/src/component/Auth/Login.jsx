import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "../Auth/Login.css";

function Login() {

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
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