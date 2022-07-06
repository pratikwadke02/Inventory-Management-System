import React from 'react';
import "../Main/Home.css";
import { Link , useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as actionType from '../../constants/actionTypes';
import {useState, useEffect} from 'react';
import decode from 'jwt-decode';
import {getProfile} from '../../actions/auth';
import { getCategories } from '../../actions/category';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
      const token=user?.token;
      if(token){
        const decodedToken = decode(token);
        if(decodedToken.exp*1000 < new Date.getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout=()=> {
      dispatch({type:'LOGOUT'});
      navigate('/login');
      setUser(null);
    }

    useEffect(()=> {
        const getUserData = async () => {
            try{
                dispatch(getProfile());
            }catch(error){
                console.log(error);
            }
        }
        getUserData();
    }, [dispatch]);

    useEffect(()=> {
        const getCategoriesData = async () => {
            try{
                dispatch(getCategories());
            }catch(error){
                console.log(error);
            }
        }
        getCategoriesData();
    }, [dispatch]);
    
  return (
    <>
    <div className="main_container">
        <nav className="navbar">
            <h1>Logged in succesfully</h1>
            <Link to='/profile' >
            <button className='white_btn'>Profile</button>
            </Link>
            <Link to='/edit_profile'>
                <button className='white_btn'>Edit Profile</button>
            </Link>
            <button className="white_btn" onClick={logout}>
                Logout
            </button>
        </nav>
        <div className="container">
            <div className="sidebar">
                <Link to='/add_category'>
                    <button className="green_btn">Add a Category</button>
                </Link>
                <Link to='add_product'>
                    <button className="green_btn">Add a Product</button>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
