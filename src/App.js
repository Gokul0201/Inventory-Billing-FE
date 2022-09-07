import React,{ useState,useEffect} from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Home/Dashboard';
import HomePage from './components/HomePage/HomePage';
import Error from './components/Error/Error404';
import Signup from './components/HomePage/Signup';
import Login from './components/HomePage/Login';
import ForgotPassword from './components/HomePage/ForgotPassword';
import Invoice from './components/Invoice/Invoice';
import CustomerList from './components/customersList/CustomerList';
import AddCustomer from './components/customersList/AddCustomer';
import AddStocks from './components/Stocks/AddStocks';
import StocksList from './components/Stocks/StocksList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
import EditCustomer from './components/customersList/EditCustomer'


export const url="https://inventory-billing01.herokuapp.com/users";
export const customerUrl="https://inventory-billing01.herokuapp.com/customers";
export const stockUrl="https://inventory-billing01.herokuapp.com/stocks";





function App() {
  const [isLoading, setLoading] = useState(true);
  

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
  
  return <>
   
  <div className="App">
    
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/invoice" element={<Invoice/>} />
          <Route path="/customers" element={<CustomerList/>} />
          <Route path="/add-customers" element={<AddCustomer/>} />
          <Route path="edit-customer/:id" element={<EditCustomer/>}/>
          <Route path="/stocks" element={<StocksList/>} />
          <Route path="/add-stocks" element={<AddStocks/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
   
 
  </>
}

export default App;
