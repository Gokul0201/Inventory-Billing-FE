import React from 'react'
import Sidebar from '../sidebar/Sidebar'




const Dashboard = () => {
 
  
  return (
 
  <div className="main-wrapper">
  <Sidebar/>
  {/* <!-- Begin Page Content --> */}
  <div className="container-fluid">
 

{/* <!-- Page Heading --> */}
<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    
</div>

{/* <!-- Content Row --> */}
<div className="row">

    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Customers</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">2</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas  fa-people-line fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Stocks</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">2%</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-cubes-stacked fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

  
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                             Payments</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">NIL</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
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


