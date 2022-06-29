import React from 'react';
import "../Main/Home.css";

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
            <button className="white_btn" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    </div>
    </>
  )
}

export default Home
