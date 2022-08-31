import React from 'react'
import {Link,useNavigate} from 'react-router-dom'



const Login = () => {
    let navigate= useNavigate("");
  return (
    <div className='container'>  
    <div className='row'>
    <div className="mb-3">
    <div className="text-center mx-5 auto">
            <h2>Sign in </h2>
            <form action="/dashboard">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onSubmit={()=>navigate('/dashboard')}>Login</button>
                    <Link to="/forgotpassword"><label className="right-label">Forget password?</label></Link>
                </p>
            </form>
            <footer>
                <p>New User ? <Link to="/signup">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
  </div>
  </div>
</div>
  )
}

export default Login