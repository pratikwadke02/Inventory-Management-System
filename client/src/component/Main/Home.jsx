import React from 'react';
import "../Main/Home.css";
import { Link } from 'react-router-dom';

function Home() {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    
  return (
    <>
    <div className="main_container">
        <nav className="navbar">
            <h1>Logged in succesfully</h1>
            <Link to='/profile' >
            <button className='white_btn'>Profile</button>
            </Link>
            <button className="white_btn" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    </div>
    </>
  )
}

export default Home
