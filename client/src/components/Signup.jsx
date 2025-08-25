import React,{ useState } from "react"
import '../App.css'
import Axios from 'axios'
import { useNavigate,Link } from "react-router-dom"

const Signup = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3000/auth/signup", {
            username,
            email,
            password
        }).then(response=>{
            if (response.data.status) {
                navigate('/login')
            }

        }).catch(err=>{
            console.log(err)
            
        })
    }
    return (
        <div>
            <div className="sign-up-container">
                <h1 className="font-bold text-3xl flex text-center">Welcome To Password Manager</h1>
                <h2 className="font-bold">Sign Up</h2>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">username</label>
                    <input type="text" placeholder='Username'
                        onChange={(e) => setusername(e.target.value)} />

                    <label htmlFor="email">email</label>
                    <input type="email" autoComplete='off' placeholder='Email'
                        onChange={(e) => setemail(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='********'
                        onChange={(e) => setpassword(e.target.value)} />

                    <button type='submit'>Sign Up</button>
                    <p>Have an Account? <Link className="font-medium text-blue-600 hover:text-blue-700" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup
