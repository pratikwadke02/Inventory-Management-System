import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import {UpdateProfile} from '../../actions/auth';

function EditProfile() {

const [newdata, setNewData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
})
const [error, setError] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

const handleChange = ({currentTarget: input}) => {
    setNewData({...newdata, [input.name]:input.value})
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        console.log(newdata);
        // dispatch(SignUp(data, navigate));
        dispatch(UpdateProfile(newdata, navigate));
        
    }catch(error){
        console.log(error);
    }
};


const id = JSON.parse(localStorage.getItem('profile')).data.data;

useEffect(()=> {
    const getUserData = async () => {
        try{
            const {data} = await axios.get(`http://localhost:5000/api/auth/profile/${id}`);
            setNewData({username: data.userData.username, email: data.userData.email});
        }catch(error){
            console.log(error);
        }
    }
    getUserData();
}, []);


  return (
    <>
     <nav className="navbar">
            <h1>Edit Profile</h1>
            <Link to='/' >
            <button className='white_btn'>Home</button>
            </Link>
    </nav>
    <div className="container">
    <div className="signup_container">
        <div className="signup_form_container">
            <div className="left">
                <h2>Update Profile</h2>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit} className="form_container">
                    <input 
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        value={newdata.username}
                        required
                        className='input' 
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        onChange={handleChange}
                        value={newdata.email}
                        required
                        className='input'
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        onChange={handleChange}
                        value={newdata.password}
                        required
                        className='input'
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        name="confirmPassword"
                        onChange={handleChange}
                        value={newdata.confirmPassword}
                        required
                        className='input'
                    />
                    {error && <div className='error_msg'>
                        {error}</div>}
                    <button type='submit' className='white_btn'>Edit Info</button>
                </form>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default EditProfile;