import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
import Icon1 from '../../Assets/icons8-inventory-64.png'

const Sidebar = () => {
  return (
    <div  className="sidebar-container">
    <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark " >

{/* <!-- Sidebar - Brand --> */}
<div className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
<div className="sidebar-brand-icon">
{/* <i className="fa-solid fa-warehouse"></i> */}
<img src={Icon1} alt='icon'/>
</div>
<div className="sidebar-brand-text mx-3">Inventory & Billing app</div>
</div>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">

<div className="nav-link collapsed">
<i className="fa-solid fa-chart-line"></i>
    <Link to='/dashboard'><span style={{"color":"white"}}>  Dashboard</span></Link>
</div>
</li>



{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item active">

<div className="nav-link collapsed">
<i className="fa-solid fa-receipt"></i>
    <Link to='/invoice'><span style={{"color":"white"}}>  Invoice</span></Link>
</div>

<div className="nav-link collapsed">
<i className="fa-solid fa-people-group"></i>
    <Link to='/customers'><span style={{"color":"white"}}>Customers List</span></Link>
</div>

{/* <div className="nav-link collapsed">
<i className="fa-solid fa-user-plus"></i>
    <Link to='/add-customers'><span style={{"color":"white"}}>  Add Customer</span></Link>
</div> */}

<div className="nav-link collapsed">
<i className="fa-solid fa-cubes-stacked"></i>
    <Link to='/stocks'><span style={{"color":"white"}}>  Stocks List</span></Link>
</div>

<div className="nav-link collapsed">
<i className="fa-solid fa-square-plus"></i>
    <Link to='/add-stocks'><span style={{"color":"white"}}>  Add stocks</span></Link>
</div>

{/* <div className="nav-link collapsed">
<i className="fa-solid fa-file-invoice-dollar"></i>
    <Link to='/payments'><span style={{"color":"white"}}>  Payments</span></Link>
</div> */}


</li>
</ul>
</div>    
  )
}

export default Sidebar
