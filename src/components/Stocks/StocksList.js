import React,{useEffect,useState} from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/esm/Button';
import {url1} from '../../App'
import axios from 'axios'

const StocksList = () => {
  let navigate=useNavigate();
  let [data,setData]=useState([]);
  
  useEffect(()=>{
    getData()
},[])

let getData = async ()=>{
   let res = await axios.get(url1)
   setData(res.data)
}

let handleDelete = async(i)=>{
    try
    {
        await axios.delete(`${url1}/${i}`)
    }
    catch(error)
    {
        console.log(error)
    }
    getData()
}

return (
  <div className="main-wrapper">
    <Sidebar/>
    <div className='container'>
      <h3 className='d-flex justify-content-center fw-bold text-dark'>CUSTOMERS LIST</h3>
      <Button variant="primary" classNmae='text-center' onClick={() => navigate('/add-stocks')}> +  Add Stocks </Button>
      <div className='row py-5 '>
        <div className='col-lg-12'>
      <Table striped bordered hover>
  <thead>
    <tr>
      {/* <th>#</th> */}
      <th>Name</th>
      <th>Brand</th>
      <th>Type</th>
      <th>Quantity</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((e)=>{
            return <tr key={e.id}>
                {/* <td>{e.id}</td> */}
                <td>{e.productName}</td>
                <td>{e.ProductBrand}</td>
                <td>{e.ProductType}</td>
                <td>{e.Quantity}</td>
                <td>
                    {/* <Button variant="primary" onClick={() => navigate(`/edit-stocks/${e.id}`)}>Edit</Button>
                    &nbsp;&nbsp; */}
                    <Button variant="danger" onClick={() => handleDelete(e.id) }>Delete</Button>
                </td>
            </tr>
        })
    }
  </tbody>
</Table> 
</div>
</div>                                        
</div>
 
  </div>
)

}

export default StocksList