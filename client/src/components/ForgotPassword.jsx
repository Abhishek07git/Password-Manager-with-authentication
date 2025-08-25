import React,{ useState } from "react"
import '../App.css'
import Axios from 'axios'
import { useNavigate,Link } from "react-router-dom"


const ForgotPassword = () => {
    
    const [email, setemail] = useState("")
    

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3000/auth/forgot-password", {
            email,

        }).then(response => {
            if (response.data.status) {
                alert("check your email for reset password link")
                navigate('/login')
            }
            
        }).catch(err => {
            console.log(err)

        })
    }
    return (
        <div className="sign-up-container">
            <h2 className="font-bold">Forgot Password</h2>
            <form className="sign-up-form" onSubmit={handleSubmit}>


                <label htmlFor="email">Email</label>
                <input type="email" autoComplete='off' placeholder='Email'
                    onChange={(e) => setemail(e.target.value)} />



                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ForgotPassword
