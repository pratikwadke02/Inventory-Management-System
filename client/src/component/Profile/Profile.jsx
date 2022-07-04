import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import {getProfile} from '../../actions/auth'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'


function Profile() {

    const id = JSON.parse(localStorage.getItem('profile')).data.data;

    const [userInfo, setUserInfo] = useState(
        {
            username: "",
            email: "",
        }
    );
    
    const dispatch = useDispatch();

    useEffect(()=> {
        const getUserData = async () => {
            try{
                // console.log(id);
                const {data} = await axios.get(`http://localhost:5000/api/auth/profile/${id}`);
                // console.log(data);
                setUserInfo({username: data.userData.username, email: data.userData.email});
            }catch(error){
                console.log(error);
                
            }
            // try{
            //     // setUserInfo(dispatch(getProfile()));  
            //     // console.log(dispatch(getProfile()));
            // }catch(error){
            //     console.log(error);
            // }
        }
        getUserData();
    }, []);

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
            <Link to='/edit_profile'>
                <button className='white_btn'>Edit Profile</button>
            </Link>
        </nav>
    <div className="container">
        <h1>Name: {userInfo.username}</h1>
        <h1>Email: {userInfo.email}</h1>
    </div>
    </>
  )
}

export default Profile