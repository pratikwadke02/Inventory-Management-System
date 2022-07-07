import React from 'react'
import { useSelector } from 'react-redux'

function Category() {

  const categoriesData = (useSelector(state => state.category)).categories.categories;
  // console.log(categoriesData);


  return (
    <>
    <div className="container">
    {categoriesData.map((category, index) => {
      return (
        <div key={index}>
          <h3>{category.name}</h3>
        </div>
      )
    }
    )}
    </div>
    </>

  )
}

export default Category