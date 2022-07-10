import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {deleteCategory}  from '../../actions/category';
import { useNavigate } from 'react-router-dom';

function Category() {

  const categoriesData = (useSelector(state => state.category)).categories.categories;
  // console.log(categoriesData);

  const [categories, setCategories] = useState(categoriesData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleDeleteCategory = async (id) => {
    try{
      setCategories(categories.filter(category => category._id !== id));
      dispatch(deleteCategory(id));
    }catch(error){
      console.log(error);
    }
  }


  return (
    <>
    <div className="container">
    {categories.map((category, index) => {
      return (
        <div key={index}>
          <h3>{category.name}</h3>
          <p>{category._id}</p>
          <button>Edit</button>
          <button onClick={() => handleDeleteCategory(category._id)}>Delete</button>
        </div>
      )
    }
    )}
    </div>
    </>

  )
}


export default Category;