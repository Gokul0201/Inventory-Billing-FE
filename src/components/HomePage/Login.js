import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../../Assets/login (1).png'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import './login.css'
import { url } from '../../App'

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },

        validate: (values) => {
            const errors = {}

            if (!values.username) {
                errors.username = "Required"
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

        onSubmit: async (values, { resetForm }) => {
            try {
                const login = await axios.post(`${url}/login`, values)
                window.sessionStorage.setItem('token',login.data.token)
                resetForm({ values: '' })
                if(login.data.message === "User Logged in Successfully"){
                toast.success(login.data.message)
                setTimeout(() => {
                    navigate("/dashboard")
                }, 3000)
            }
            else{
                toast.error(login.data.message)
            }

            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message)
            }
        }
     })

    const handlePassShown = () => {
        showPass === false ? setShowPass(true) : setShowPass(false)
    }

    return (
        <div className="container-fluid loginConFluid">
            <Toaster position="top-right"
                reverseOrder={false} />
            <div className="container">
                <div className="row loginRow">
                    <h1>Login</h1>
                    <div className="col loginCol">
                        <div className="loginImg">
                            <img src={LoginImg} alt="login_img" />
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                      
                            <label htmlFor="">Username <span className='redStar'>*</span></label>
                            <input type="text" className={formik.errors.username ? 'errBorder form-control' : 'form-control'} name="username" value={formik.values.username}
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
                            <div className="loginBtn">
                                <button className='btn btn-warning mt-4'>Login <FontAwesomeIcon icon={faArrowRightToBracket} /></button>
                            </div>
                            <p className='mt-3'>If you have don't account? <Link to="/signup">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login