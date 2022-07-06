import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addCategory } from '../../actions/category'
import Category from './Category'

function AddCategory() {

    const [error, setError] = useState();
    const [category, setCategory] = useState({
        name: '',
    });


    const handleChange = ({ currentTarget: input }) => {
        setCategory({ ...category, [input.name]: input.value });
    }


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(category);
            dispatch(addCategory(category, navigate));
        } catch (error) {
            console.log(error);
        }
    }

    


  return (
    <>
    <nav className="navbar">
            <h1>Add a Category</h1>
            <Link to='/'>
                <button className="white_btn">Home</button>
            </Link>
    </nav>
    <div className="container">
    <div className="signup_container">
        <div className="signup_form_container">
            <div className="left">
                <h2>Categories</h2>
                <Category />
            </div>
            <div className="right">
                <form onSubmit={handleSubmit} className="form_container">
                    <input 
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                        required
                        className='input' 
                    />
                    {error && <div className='error_msg'>
                        {error}</div>}
                    <button type='submit' className='white_btn'>Add a Category</button>
                </form>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default AddCategory
