import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Profile() {

    const [data, setData] = useState();
    const [error, setError] = useState("");

    const getUserData = async () => {
        try{
            const url = "http://localhost:5000/api/auth/profile";
            const {data: res} = await axios.get(url);
            setData(res);
            console.log(res);
        }catch(error){
            console.log(error);
        }
    }


  return (
    <>
    <div className="container">
        <h1>Profile</h1>
        <div className="profile_container">
            <div className="left">
                <h2>{data.username}</h2>
                <p>{data.email}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile