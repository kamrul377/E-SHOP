import React, { useState } from 'react'
import './signup.scss'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { firebaseConfig } from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Alert from '../external/AlertMsg';
// import { Alert, AlertTitle } from '@mui/material'


const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)




  const auth = getAuth();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("success")
          setError("")
          setEmail("")
          setPassword("")
          setConfirmPassword("")
          setSuccess("successfully register")


          

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          setError(errorMessage)
        });
    } else {
      setError("password doesn't match")
    }

  }

  const navigate = useNavigate()

  return (
    <>
      <div className="login">
        <h2 className='text-xl'>Create New Account</h2>
        <form action="#" className='form' onSubmit={handleSubmit} data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">


            

          <div className="name">
            <label htmlFor="name">User  Email: </label>
            <input type="text" required name="name" id="name" className='input' onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>


          <div className="password">
            <label htmlFor="password">Password: </label>
            <input type="text" required password="password" id="password" className='input' onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>

          <div className="password">
            <label htmlFor="password">confirm password: </label>
            <input type="text" required password="password" id="password" className='input' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
          </div>


          {
            error && <small className='text-red-700'>
              {error}
            </small>

          }
          {success && <small className='text-green-600'> {success} </small>}

          <button type="submit">Signup</button>

          <div className='mt-1'>
            <small>
              already account? <Link to={'/login'}> login</Link>
            </small>

          </div>

          


        </form>
      </div>

    </>
  )
}

export default Signup