import React, { useState } from 'react'
import './login.scss'
// import Button from 'react-bootstrap/Button';


import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import swal from 'sweetalert';

const Login = () => {

  const auth = getAuth();


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [showicon, setShowicon] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  let inputType = showPassword ? "text" : "password"

  const handleSubmit = (e) => {
    e.preventDefault();


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('login')
        setEmail("")
        swal("login success")
        setPassword("")
        setError("")


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        setError(errorMessage)
      });

  }


  let fadeup = "fade-up"
  let bottomBottom = "bottom-bottom"

  return (
    <>
      <div className="login">
        <h2 className='text-xl'> Login Your Account</h2>



        <form action="#" className='form' onSubmit={handleSubmit} data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom" >


          <div className="name rounded">
            <label htmlFor="email">User Email: </label>
            <input type='text' required name="name" id="name" className='input' onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className="password">
            <label htmlFor="password">Password: </label>
            <input type={inputType} required password="password" id="password" className='input' onChange={(e) => setPassword(e.target.value)} value={password} />
            {
              <span className='icon'>


                {
                  showPassword ? <VisibilityIcon onClick={() => setShowPassword(!showPassword)} /> : <VisibilityOffIcon onClick={() => setShowPassword(!showPassword)} />
                }
              </span>
            }

          </div>

          <div className="check">
            <div className="remember">
              <input type="checkbox" name="checkbox" id="" />
              <span>remember me</span>
            </div>
            <div className="forgot">
              <a href="http://">forgot your password?</a>
            </div>
          </div>

          <button type="submit">Login</button>
          {
            error && <span className='error'>{error}</span>
          }
          <div className='mt-1'>
            <small>
              You don't have account? <Link to={'/signup'}> Signup</Link>
            </small>

          </div>





        </form>
      </div>

    </>
  )
}

export default Login