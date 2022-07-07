import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import { addProduct } from '../../actions/product'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function AddProduct() {

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  })

  const [error, setError] = useState("");

  const handleChange = ({currentTarget: input}) => {
    setProductData({
      ...productData,
      [input.name]: input.value
    })
  }


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      console.log(productData);
      dispatch(addProduct(productData, navigate));
    }catch(error){
      console.log(error);
      setError(error.message);
    }
  }

  const categoriesData = (useSelector(state => state.category)).categories.categories;

  return (
    <>
     <nav className="navbar">
            <h1>Add new Product</h1>
            <Link to='/' >
            <button className='white_btn'>Home</button>
            </Link>
    </nav>
    <div className="container">
    <div className="signup_container">
        <div className="signup_form_container">
            <div className="left">
                <h2>Add new Products</h2>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit} className="form_container">
                    <input 
                        type="text"
                        placeholder="Product Name"
                        name="name"
                        onChange={handleChange}
                        value={productData.name}
                        required
                        className='input' 
                    />
                    <input
                        type="text"
                        placeholder="Price"
                        name="price"
                        onChange={handleChange}
                        value={productData.price}
                        required
                        className='input'
                    />
                    <input
                        type="text"
                        placeholder='Stock'
                        name="stock"
                        onChange={handleChange}
                        value = {productData.stock}
                        required
                        className='input'
                    />
                    {/* dropdown os categories */}
                    <select name="category" onChange={handleChange} value={productData.category} className='input'>
                        <option value="">Select Category</option>
                        {categoriesData.map((category, index) => {
                          return (
                            <option key={index} value={category.name}>{category.name}</option>
                          )
                        }
                        )
                        }
                      </select>
                    {error && <div className='error_msg'>
                        {error}</div>}
                    <button type='submit' className='white_btn'>Add Product</button>
                </form>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default AddProduct