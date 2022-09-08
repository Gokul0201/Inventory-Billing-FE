import React ,{useState}from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'; 
import {stockUrl} from '../../App'

const AddStocks = () => {
  let[productName,setProduct]=useState("");
  let[ProductBrand,setProductName]=useState("");
  let[ProductType,setProductType]=useState("");
  let[Quantity,setQuantity]=useState("");
  
  
  let navigate=useNavigate();

  let handleSubmit=async ()=>{
    let data={
   productName,
   ProductBrand,
   ProductType,
   Quantity
  }
    

  let res=await axios.post(`${stockUrl}/stocks`,data)
  if (res.status === 200)
    navigate('/stocks')
  }
  
  return (
    <div className='main-wrapper'>
      <Sidebar/>
      <div className='container'>
      <h3 className='d-flex justify-content-center fw-bold text-dark'>ADD STOCKS</h3>
      <div className='row py-5'>
        <div className='col-lg-4 '>
    <Form >
  <Form.Group className="mb-3">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Product Name" onChange={(e=>setProduct(e.target.value))}/>
  </Form.Group>
  
  <Form.Group className="mb-3" >
  <Form.Label>Product Brand</Form.Label> 
  <Form.Select aria-label="Default select example" onChange={(e=>setProductName(e.target.value))}>
      <option>Select Product Brand</option>
      <option value="Dahua">Dahua</option>
      <option value="CP plus">Cpplus</option>
      <option value="Hik vision">Hik vision</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" >
  <Form.Label>Product Type</Form.Label> 
  <Form.Select aria-label="Default select example" onChange={(e=>setProductType(e.target.value))}>
      <option>Select Type</option>
      <option value="Dahua">Camera</option>
      <option value="CP plus">DVR</option>
      <option value="Hik vision">Hard Disk</option>
    </Form.Select>
    </Form.Group>
    
  <Form.Group className="mb-3" >
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="text" placeholder="No.of.quantity" onChange={(e=>setQuantity(e.target.value))}/>
  </Form.Group>
 
 
  <Button variant="primary" className="text-dark"  onClick={() =>handleSubmit()}>
  Add
  </Button>
  </Form>
  </div>
 </div>
</div>
    </div>
  )
}

export default AddStocks