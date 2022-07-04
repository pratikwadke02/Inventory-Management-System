import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import {getProfile} from '../../actions/auth'
import {useParams} from 'react-router-dom'
import axios from 'axios';


function Profile() {

    const id = JSON.parse(localStorage.getItem('profile')).data.data;

    // const {id} = useParams();

    // useEffect(()=> {
    //     getProfile(id);
    // }, [getProfile, id])

    const [userInfo, setUserInfo] = useState(
        {
            username: "",
            email: "",
        }
    );
    
    useEffect(()=> {
        const getUserData = async () => {
            try{
                console.log(id);
                const {data} = await axios.get(`http://localhost:5000/api/auth/profile/${id}`);
                console.log(data);
                setUserInfo({username: data.userData.username, email: data.userData.email});
            }catch(error){
                console.log(error);
                
            }
        }
        getUserData();
    }, [])

    
  return (
    <>
    <div className="container">
        <h1>Profile</h1>
        <h2>{userInfo.username}</h2>
        <p>{userInfo.email}</p>
    </div>
    </>
  )
}

export default Profile