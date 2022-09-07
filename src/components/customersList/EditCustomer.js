import React,{useEffect,useState}  from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {customerUrl} from '../../App'
import Sidebar from '../sidebar/Sidebar'



const EditCustomer = (props) => {
  let params=useParams();
  let[name,setName]=useState("");
  let[email,setEmail]=useState("");
  let[mobile,setMobile]=useState("");
  let[gstin,setGstin]=useState("");
  let[address,setAddress]=useState("");
  
  let navigate=useNavigate();

  
  useEffect(() => {
    getData()
  }, [])

  let getData = async ()=>{
    let token = window.sessionStorage.getItem('token');
    let res = await axios.get(`${customerUrl}/customers/${params.id}`,{headers: {authorization:`Bearer ${token}`}})
    console.log(res.data)
    if(res.data.statusCode===200)
    {
      setName(res.data.users.name)
      setEmail(res.data.users.email)
      setMobile(res.data.users.mobile)
      setGstin(res.data.users.gstin)
      setAddress(res.data.users.address)
    }
    else if(res.data.statusCode===401)
    {
      alert(res.data.message)
      navigate('/login')
    }
    else
    {
        alert(res.data.message)
    }
  }

  let handleSubmit=async ()=>{
    let data={
    name,
    email,
    mobile,
    gstin,
    address
  }
    
  let token = window.sessionStorage.getItem('token');
  let res = await axios.put(`${customerUrl}/edit-customers/${params.id}`,data,{headers: {authorization:`Bearer ${token}`}})
  //Just to jump to different route
  if(res.status===200)
    navigate('/customers')
    else if(res.data.statusCode===401)
    {
      alert(res.data.message)
      navigate('/login')
    }
    else
    {
      alert(res.data.message)
    }
}
  
  return <>
    
    <div className="main-wrapper">
      <Sidebar/>
      <div className='container'>
      <div className='row '>
        <div className='col-lg-8'>
    <Form>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e=>setName(e.target.value))}/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email"  value={email} placeholder="Enter Email" onChange={(e=>setEmail(e.target.value))}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" value={mobile} placeholder="Enter Mobile Number"onChange={(e=>setMobile(e.target.value))} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>GSTIN No</Form.Label>
    <Form.Control type="text" value={gstin} placeholder="Enter Gstin Number" onChange={(e=>setGstin(e.target.value))}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" value={address} placeholder="Your Address" onChange={(e=>setAddress(e.target.value))}/>
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

export default EditCustomer