import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header/Header';
import Dashboard from './components/Home/Dashboard';
import HomePage from './components/HomePage/HomePage';
// import Sidebar from './components/sidebar/Sidebar';
import Error from './components/Error/Error404';
import Signup from './components/HomePage/Signup';
import Login from './components/HomePage/Login';
import ForgotPassword from './components/HomePage/ForgotPassword';
import Invoice from './components/Invoice/Invoice';
import CustomerList from './components/customersList/CustomerList';
import AddCustomer from './components/customersList/AddCustomer';
import AddStocks from './components/Stocks/AddStocks';
import StocksList from './components/Stocks/StocksList';
import Payments from './components/payments/Payments';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return <>
  <div className="main-wrapper">
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
          <Route path="/stocks" element={<StocksList/>} />
          <Route path="/add-stocks" element={<AddStocks/>} />
          <Route path="/payments" element={<Payments/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
 
  </>
}

export default App;
