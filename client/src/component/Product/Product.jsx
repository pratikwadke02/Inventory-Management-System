import React from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../actions/product';

function Product() {
  
  const productData = (useSelector(state => state.product)).products;
  console.log(productData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteProduct = async (id) => {
    try{
      dispatch(deleteProduct(id, navigate));
    }catch(error){
      console.log(error);
    }
  }
  
  const handleEditProduct = (product) => {
    console.log(product);
  }


  return (
    <>
    <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Action</th>
      </thead>
      {productData.map((product, index ) => (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.stock}</td>
          <td>
            <button onClick={() => handleEditProduct(product._id)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
    </>
  )
}

export default Product