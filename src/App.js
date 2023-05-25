
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// for using bootstrap..
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import { motion, useScroll } from "framer-motion";


import { useState } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  const { scrollYProgress } = useScroll();

  return (


    <BrowserRouter>


      <div className="App">


        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />

        <Navbar />
        <Routes> 

          <Route path='/'  element={<HomePage />}/>
          <Route path='/login'  element={<LoginPage />}/>
          <Route path='/signup'  element={<SignupPage />}/>

        </Routes>
        <Footer />

      </div>


    </BrowserRouter>
  );
}

export default App;
