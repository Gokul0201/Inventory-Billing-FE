// import React from 'react'
// import {Link} from 'react-router-dom'


// const Signup = () => {
//   return (
//     <div className="container">
//     <div className="text-center mx-auto">
//             <h2>Join us</h2>
//             <h5>Create your personal account</h5>
//             <form action="/login">
//                 <p>
//                     <label>Username</label><br/>
//                     <input type="text" name="first_name" required />
//                 </p>
//                 <p>
//                     <label>Email address</label><br/>
//                     <input type="email" name="email" required />
//                 </p>
//                 <p>
//                     <label>Password</label><br/>
//                     <input type="password" name="password" requiredc />
//                 </p>
//                 <p>
//                     <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
//                 </p>
//                 <p>
//                     <button id="sub_btn" type="submit">Register</button>
//                 </p>
//             </form>
//             <footer>
//                 <p><Link to="/">Back to Homepage</Link>.</p>
//             </footer>
//             </div>
//         </div>

//   )
// }

// export default Signup

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast';
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { config } from '../../config'
import signUpImg from '../../Assets/signup.png'

const Signup = () => {
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: ''
        },

        validate: (values) => {
            const errors = {}

            if (!values.email) {
                errors.email = "Required"
            }
            if (values.username.length === 0) {
                errors.username = "Required"
            } else if (values.username.length < 5) {
                errors.username = "Username length should be morethan 5Character"
            }
            if (values.password.length === 0) {
                errors.password = "Required"
            } else if (values.password.length < 8) {
                errors.password = "Password length should be morethan 8Character"
            }
            return errors
        },

        // onSubmit: async (values, { resetForm }) => {
        //     try {
        //         let postData = await axios.post(`${config.api}/register`, values)
        //         resetForm({ values: '' })
        //         toast.success(postData.data.message)
        //         setTimeout(() => {
        //             navigate("/login")
        //         }, 3000)
        //     } catch (error) {
        //         alert('Register Error!')
        //     }
        // }
    })

    const handlePassShown = () => {
        showPass === false ? setShowPass(true) : setShowPass(false)
    }

    return (
        <div className="container-fluid regConFluid">
            <Toaster position="top-right"
                reverseOrder={false} />
            <div className="container">
                <div className="row regRow">
                    <h1>Register</h1>
                    <div className="col regCol">
                        <div className='signUpImg'>
                            <img src={signUpImg} alt="signup-img" />
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="">Email <span className='redStar'>*</span></label>
                            <input type="email" className={formik.errors.email ? 'errBorder form-control' : 'form-control'} name='email' value={formik.values.email}
                                onChange={formik.handleChange} />
                            {
                                formik.errors.email ? <p style={{ color: 'crimson', fontWeight: "bold", WebkitTextStroke: "0.2px black" }}>{formik.errors.email}</p> : null
                            }
                            <label htmlFor="" className='mt-2'>Username <span className='redStar'>*</span></label>
                            <input type="text" className={formik.errors.username ? 'errBorder form-control' : 'form-control'} name='username' value={formik.values.username}
                                onChange={formik.handleChange} />
                            {
                                formik.errors.username ? <p style={{ color: 'crimson', fontWeight: "bold", WebkitTextStroke: "0.2px black" }}>{formik.errors.username}</p> : null
                            }
                            <label htmlFor="" className='mt-2'>Password <span className='redStar'>*</span></label>
                            <div className="eyeBtn">
                                <input type={showPass ? "text" : "password"} className={formik.errors.password ? 'errBorder form-control' : 'form-control'} name='password' value={formik.values.password}
                                    onChange={formik.handleChange} />
                                <span onClick={handlePassShown}>{showPass ? <FontAwesomeIcon color='black' icon={faEye} /> : <FontAwesomeIcon color='black' icon={faEyeSlash} />}</span>
                            </div>
                            {
                                formik.errors.password ? <p style={{ color: 'crimson', fontWeight: "bold", WebkitTextStroke: "0.2px black" }}>{formik.errors.password}</p> : null
                            }
                            <div className="regBtn">
                                <button className='btn btn-warning mt-4'>Register &nbsp;<FontAwesomeIcon icon={faArrowUpFromBracket} /></button>
                            </div>
                            <p className='mt-3'>If you have already account? <Link to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup