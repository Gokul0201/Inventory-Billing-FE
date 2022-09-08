import React,{useEffect,useState} from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/esm/Button';
import {stockUrl} from '../../App'
import axios from 'axios'

const StocksList = () => {
  let navigate=useNavigate();
  let [data,setData]=useState([]);
  
  useEffect(()=>{
    getData()
},[])


let getData = async ()=>{
  let token = window.sessionStorage.getItem('token');
 let res = await axios.get(`${stockUrl}/stocks`,{
  headers: {authorization:`Bearer ${token}`}
 })

 if(res.data.statusCode === 200)
      setData(res.data.users)
 else if(res.data.statusCode === 401){
      alert(res.data.message)
      navigate('/login')
 }
}

let handleDelete = async(id)=>{
  try
  {
      let token = window.sessionStorage.getItem('token');
      let res = await axios.delete(`${stockUrl}/delete-stocks/${id}`,{headers:{authorization:`Bearer ${token}`}})
  
      if(res.data.statusCode === 200)
      {
          setData(res.data.users)
      }
      else if(res.data.statusCode === 401)
      {
          alert(res.data.message)
          navigate('/login')
      }
      else
      {
          alert(res.data.message)
      }
  }
  catch(error)
  {
      console.log(error)
  }
  }

return (
  <div className="main-wrapper">
    <Sidebar/>
    <div className='container'>
      <h2 className='d-flex justify-content-center fw-bold text-dark'>CUSTOMERS LIST</h2>
      <Button variant="primary" className='text-center text-dark ' onClick={() => navigate('/add-stocks')}> +  Add Stocks </Button>
      <div className='row py-5 '>
        <div className='col-lg-12'>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Brand</th>
      <th>Type</th>
      <th>Quantity</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((e,i)=>{
            return <tr key={e._id}>
                <td>{i+1}</td>
                <td>{e.productName}</td>
                <td>{e.ProductBrand}</td>
                <td>{e.ProductType}</td>
                <td>{e.Quantity}</td>
                <td>
                    {/* <Button variant="primary" onClick={() => navigate(`/edit-stocks/${e.id}`)}>Edit</Button>
                    &nbsp;&nbsp; */}
                    <Button variant="danger" className="text-dark"  onClick={() => handleDelete(e._id) }>Delete</Button>
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