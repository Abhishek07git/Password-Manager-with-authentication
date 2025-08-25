import React, { useState } from "react"
import '../App.css'
import Axios from 'axios'
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState(""); // for displaying backend errors

    const navigate = useNavigate()
    Axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3000/auth/login", {
            email,
            password
        }).then(response => {
            const res = response.data;
            console.log(res); //Check what comes back
            if (res.status) {
                navigate('/dashboard'); // ensure this is correct
            }
            else {
                setError(res.message || "Login failed")
            }

        }).catch(err => {
            console.log(err);
        });
    }
    return (
        <div>
            <div className="sign-up-container">
                <h2 className="font-bold">Login</h2>
                <form className="sign-up-form" onSubmit={handleSubmit}>


                    <label htmlFor="email">email</label>
                    <input type="email" autoComplete='off' placeholder='Email'
                        onChange={(e) => setemail(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='********'
                        onChange={(e) => setpassword(e.target.value)} />

                    <button type='submit'>Login</button>

                    {/* Display error message */}
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <Link className=" text-blue-600 hover:text-blue-700" to="/forgotPassword">Forgot Password</Link>
                    <p>Don't have an Account?
                        <Link className="text-blue-600 hover:text-blue-700" to="/signup">Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login
