import React from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../actions/product';
import {useState} from 'react';

function Product() {
  
  const productData = (useSelector(state => state.product)).products;
  const [products, setProducts] = useState(productData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteProduct = async (id) => {
    try{
      setProducts(products.filter(product => product._id !== id));
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
      {products.map((product, index ) => (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.stock}</td>
          <td>
            <Link to="/update_product">
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
    </>
  )
}

export default Product