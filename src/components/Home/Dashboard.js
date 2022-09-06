import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from './Header/Header'



const Dashboard = () => {
 
  
  return (
    // <div id="content-wrapper" className="d-flex flex-column container-fluid">
    // <div id="main-content">
     
  <div className="main-wrapper">
  <Sidebar/>
  {/* <!-- Begin Page Content --> */}
  <div className="container-fluid">
 

{/* <!-- Page Heading --> */}
<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    {/* <a href="#!" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
</div>

{/* <!-- Content Row --> */}
<div className="row">

    {/* <!-- Earnings (Monthly) Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Customers</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Customers</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Earnings (Monthly) Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Stocks</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Stocks</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    {/* <!-- Pending Requests Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                             Payments</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Pending Payments</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
 </div>
//  </div>
//  </div>
 
 ) 
}

export default Dashboard


