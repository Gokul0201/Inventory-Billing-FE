import React,{ useState} from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {url} from '../../App'

const AddCustomer = (props) => {
  let[name,setName]=useState("");
  let[email,setEmail]=useState("");
  let[mobile,setMobile]=useState("");
  let[gstin,setGstin]=useState("");
  let[address,setAddress]=useState("");
  
  let navigate=useNavigate();

  let handleSubmit=async ()=>{
    let data={
    name,
    email,
    mobile,
    gstin,
    address
  }
    

  let res=await axios.post(url,data)
  if (res.status === 201)
    navigate('/customers')
  }
  
  return <>
    <div className="main-wrapper">
      <Sidebar/>
      <div className='container'>
      <h3 className='d-flex justify-content-center fw-bold text-dark'>ADD CUSTOMER</h3>
      <div className='row py-5'>
        <div className='col-lg-6'>
    <Form>
  <Form.Group className="mb-3">
    <Form.Label >Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={(e=>setName(e.target.value))}/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Enter Email" onChange={(e=>setEmail(e.target.value))}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder="Enter Mobile Number"onChange={(e=>setMobile(e.target.value))} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>GSTIN No</Form.Label>
    <Form.Control type="text" placeholder="Enter Gstin Number" onChange={(e=>setGstin(e.target.value))}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Your Address" onChange={(e=>setAddress(e.target.value))}/>
  </Form.Group>
 
  <Button variant="primary" onClick={() =>handleSubmit()}>
    Submit
  </Button>
  </Form>
  </div>
 </div>
</div>
      
      </div>
  </>
}

export default AddCustomer