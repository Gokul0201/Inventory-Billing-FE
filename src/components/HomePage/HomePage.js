import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './homepage.css'

const HomePage = () => {
  // const navigate=useNavigate();
  return (
    <div className="conainer-fluid homepage-container">
    <div className='container '>
      <header>
            <h1 className=" text-center">Welcome to Inventory Billing</h1>
            <h1 className=" text-center">Lets do here <br/> Inventory Management & <br/>Create Invoice Easily</h1>
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
