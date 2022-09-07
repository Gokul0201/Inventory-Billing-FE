import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/esm/Button';
import {customerUrl} from '../../App'
import axios from 'axios'
import Sidebar from '../sidebar/Sidebar'


const CustomerList = () => {
  let navigate=useNavigate();
    let [data,setData]=useState([]);
    
    useEffect(()=>{
      getData()
  },[])

  let getData = async ()=>{
    let token = window.sessionStorage.getItem('token');
   let res = await axios.get(`${customerUrl}/customers`,{
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
    let res = await axios.delete(`${customerUrl}/delete-customers/${id}`,{headers:{authorization:`Bearer ${token}`}})

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
        <h3 className='d-flex justify-content-center fw-bold text-dark'>CUSTOMERS LIST</h3>
        <Button variant="primary" className="text-dark" onClick={() => navigate('/add-customers')}> +  Add customer </Button>
        <div className='row py-5 '>
          <div className='col-lg-12'>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th> 
        <th>Email</th>
        <th>Mobile</th>
        <th>GSTIN No</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
          data.map((e,i)=>{
              return <tr key={e._id}>
                  <td>{i+1}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.gstin}</td>
                  <td>{e.address}</td>
                  <td>
                      <Button variant="primary" className="text-dark" onClick={() => navigate(`/edit-customer/${e._id}`)}>Edit</Button>
                      &nbsp;&nbsp;
                      <Button variant="danger" className="text-dark" onClick={() => handleDelete(e._id) }>Delete</Button>
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

export default CustomerList




