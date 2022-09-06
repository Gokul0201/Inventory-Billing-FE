import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/esm/Button';
import {url} from '../../App'
import axios from 'axios'
import Sidebar from '../sidebar/Sidebar'


const CustomerList = () => {
  let navigate=useNavigate();
    let [data,setData]=useState([]);
    
    useEffect(()=>{
      getData()
  },[])

  let getData = async ()=>{
     let res = await axios.get(url)
     setData(res.data)
  }

  let handleDelete = async(i)=>{
      try
      {
          await axios.delete(`${url}/${i}`)
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
        <Button variant="primary" className='d-flex justify-content-end' onClick={() => navigate('/add-customers')}> +  Add customer </Button>
        <div className='row py-5 '>
          <div className='col-lg-12'>
        <Table striped bordered hover>
    <thead>
      <tr>
        {/* <th>#</th> */}
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
          data.map((e)=>{
              return <tr key={e.id}>
                  {/* <td>{e.id}</td> */}
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.gstin}</td>
                  <td>{e.address}</td>
                  <td>
                      <Button variant="primary" onClick={() => navigate(`/edit-customer/${e.id}`)}>Edit</Button>
                      &nbsp;&nbsp;
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

export default CustomerList




