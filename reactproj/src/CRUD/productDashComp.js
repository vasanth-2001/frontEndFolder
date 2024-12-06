import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const ProductDashComp = () => {
    const [product,setProduct] =useState([]);
    useEffect(()=>{
        // axios.get("http://localhost:8080/products").then((res)=>{
        //     console.log(res.data);
        //     setProduct(res.data);
        // }).catch((error)=>{})
            fetchData();
    },[]);
    // editButton(()=>{
    //     window.alert("hi");
    // })

    //get request logic
    const fetchData =()=>{
          axios.get("http://localhost:8080/products").then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{})
    }

    //delete request logic
    const deleteProduct = (id)=>{
        // console.log(id);
        if (window.confirm(`are you sure want to delete: ${id}`)) {
            axios.delete(`http://localhost:8080/products/${id}`).then(()=>{
                window.alert("product deleted successfully");
                fetchData();
            }).catch((error)=>{})
        }
        
        
    }
  return (
    <div>
        <h2>productDashComp</h2>
        <Link to="/mainDashboard/productadd"  className='btn btn-primary btn-ms mt-2 mb-2'>
            <AddIcon/> ADD
            </Link>
        <table className='table table-hover table-bordered table-striped text-center'>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Company</th>
                    <th>Quantity</th>
                    <th>Action</th>
                    {/* <th>Sr.No</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    product.length > 0 && product.map((val,index)=>{
                        return <tr key={val.id}>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.price}</td>
                            <td>{val.pcompany}</td>
                            <td>{val.pquantity}</td>
                            <td>
                            <Link to={`/mainDashboard/productedit/${val.id}`}  className='btn btn-outline-success btn-sm'>
                                <EditIcon/>
                            </Link>
                            
                            <button type='button' onClick={()=>deleteProduct(val.id)} className='btn btn-outline-success btn-sm'>
                                <DeleteIcon/>
                            </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductDashComp