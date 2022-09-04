import React,{useEffect,useState}  from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {url} from '../../App'
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

  let getData=async () =>{
    let res=await axios.get(`${url}/${params.id}`)
    setName(res.data.name)
    setEmail(res.data.email)
    setMobile(res.data.mobile)
    setGstin(res.data.gstin)
    setAddress(res.data.address)
    
  }

  let handleSubmit=async ()=>{
    let data={
    name,
    email,
    mobile,
    gstin,
    address
  }
    

  let res=await axios.put(`${url}/${params.id}`,data)
  if (res.status === 200)
    navigate('/customers')
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