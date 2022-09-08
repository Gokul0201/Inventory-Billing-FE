import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './homepage.css'
import logo from '../../Assets/icons8-inventory-64.png'

const HomePage = () => {
  // const navigate=useNavigate();
  return (
    <div className="conainer-fluid homepage-container">
    <div className='container '>
      
      <header>
      <img src={logo} className="image_container"alt="logo" />
            <h1 className=" text-center text-2xl font-bold">Welcome to Inventory Billing</h1>
            <h1 className=" text-center text-2xl font-bold">Lets do  <br/> Inventory Management & <br/>Create Invoice Easily </h1>
            <div className="buttons text-center btn-container">
                <Link to="/login">
                    <Button variant="warning">Log in</Button>
                </Link>{'  '}
                <Link to="/signup">
                    <Button variant="info" id="reg_btn"><span>Register </span></Button>
                </Link>
            </div>
        </header>
      
    </div>
    </div>
 
   
  )
}

export default HomePage
