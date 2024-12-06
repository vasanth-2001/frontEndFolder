import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
const ProductEditComp = () => {
    const {id} = useParams();
    const nav =useNavigate();

    const [product,setProduct] = useState({
        id:"",
        pname:"",
        price:"",
        pcompany:"",
        pquantity:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
            console.log(res.data);
            
            setProduct(res.data);
        }).catch((error)=>{})
    },[]);
    const inputChangeHandlar = (event) => {
        const { type, name, value } = event.target;
        setProduct({ ...product, [name]: value });
    }
    const editProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/products/${id}`, product).then(() => {
            window.alert("Product edited successfully");
            nav('/mainDashboard/productdash');
        }).catch((error) => {})

    }
  return (
    <div>
        <h2>ProductEditComp</h2>
        <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={editProduct}>
                        <label className='form-label'>Enter Product Name :</label>
                        <input type='text' name='pname' onChange={inputChangeHandlar} value={product.pname} className='form-control'></input>
                        <label className='form-label'>Enter Product price :</label>
                        <input type='text' name='price' onChange={inputChangeHandlar} value={product.price} className='form-control'></input>
                        <label className='form-label'>Enter Product Company :</label>
                        <input type='text' name='pcompany' onChange={inputChangeHandlar} value={product.pcompany} className='form-control'></input>
                        <label className='form-label'>Enter Product Quantity :</label>
                        <input type='text' name='pquantity' onChange={inputChangeHandlar} value={product.pquantity} className='form-control'></input>
                        <button type='submit' className='btn btn-primary mt-2'>Add Data</button>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
    </div>
  )
}

export default ProductEditComp