import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Manager from './Manager'
import Footer from './Footer'


const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/auth/verify').then(res => {
      if (res.data.status) {

      }
      else {
        navigate('/signup')
      }
    })
  }, [navigate])

  return (
    <>
      <Navbar />
      <Manager />
      <Footer />
    </>
  )
}

export default Dashboard
