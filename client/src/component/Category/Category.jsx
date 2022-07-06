import React from 'react'
import { useSelector } from 'react-redux'

function Category() {

  const categoriesData = (useSelector(state => state.category)).categories.categories.name;
  console.log(categoriesData);
  return (
    <div></div>

  )
}

export default Category