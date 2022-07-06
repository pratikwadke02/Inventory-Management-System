import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import {getProfile} from '../../actions/auth'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Profile() {

    const [userInfo, setUserInfo] = useState(
        {
            username: "",
            email: "",
        }
    );
    
    const dispatch = useDispatch();

    const ProfileData = (useSelector(state => state.profile)).profileData.userData;
    console.log(ProfileData);


    

    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout=()=> {
        dispatch({type:'LOGOUT'});
        navigate('/login');
        setUser(null);
      }
     
  return (
    <>
        <nav className="navbar">
            <h1>Profile</h1>
            <Link to='/' >
            <button className='white_btn'>Home</button>
            </Link>
            <button className="white_btn" onClick={logout}>
                Logout
            </button>
        </nav>
    <div className="container">
        {/* <h1>Name: {ProfileData.profileData.userData.username}</h1>
        <h1>Email: {ProfileData.profileData.userData.email}</h1> */}
        <h1>Name: {ProfileData.username}</h1>
        <h1>Email: {ProfileData.email}</h1>
    </div>
    </>
  )
}

export default Profile