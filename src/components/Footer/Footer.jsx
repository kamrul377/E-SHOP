import React from 'react'
import './footer.css'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
    return (
        <footer>
            <div className="full-section">


                <div className="col-1">
                    <h2>Support</h2>
                    <div className="call-us">
                        <div className="icon">
                            <CallIcon />
                        </div>
                        <div className="call">
                            <small>9am - 8pp</small>
                            <h4>16793</h4>
                        </div>
                    </div>
                    <div className="call-us">
                        <div className="icon">
                            <LocationOnIcon />
                        </div>
                        <div className="call">
                            <small>Store location</small>
                            <h4>Find Our Store</h4>
                        </div>
                    </div>
                </div>


                <div className="col-2">
                    <h2>About us</h2>

                    <div className="about-footer flex ">
                        <ul className='mr-5'>
                            <li className='my-4 text-slate-500'><a href="">EMI Terms</a></li>
                            <li className='my-4 text-slate-500'><a href="">About Us</a></li>
                            <li className='my-4 text-slate-500'><a href="">Online Delivery</a></li>
                            <li className='my-4 text-slate-500'><a href="">Privacy Policy</a></li>
                            <li className='my-4 text-slate-500'><a href="">Terms and Conditions</a></li>
                            <li className='my-4 text-slate-500'><a href="">Refund and Return Plicy</a></li>
                        </ul>
                        <ul className='mr-5'>
                            <li className='my-4 text-slate-500'><a href="">EMI Terms</a></li>
                            <li className='my-4 text-slate-500'><a href="">About Us</a></li>
                            <li className='my-4 text-slate-500'><a href="">Online Delivery</a></li>
                            <li className='my-4 text-slate-500'><a href="">Privacy Policy</a></li>
                            <li className='my-4 text-slate-500'><a href="">Terms and Conditions</a></li>
                            <li className='my-4 text-slate-500'><a href="">Refund and Return Plicy</a></li>
                        </ul>
                        <ul>
                            <li className='my-4 text-slate-500'><a href="">EMI Terms</a></li>
                            <li className='my-4 text-slate-500'><a href="">About Us</a></li>
                            <li className='my-4 text-slate-500'><a href="">Online Delivery</a></li>
                            <li className='my-4 text-slate-500'><a href="">Privacy Policy</a></li>
                            <li className='my-4 text-slate-500'><a href="">Terms and Conditions</a></li>
                            <li className='my-4 text-slate-500'><a href="">Refund and Return Plicy</a></li>
                        </ul>
                    </div>



                </div>





                <div className="col-5">
                    <h2>Support</h2>

                    <p className='my-4 text-slate-500'>Soft Tech & Engineering Ltd</p>
                    <p className='my-4 text-slate-500'>Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka 1000</p>
                    <p className='my-4 text-slate-500'>Email </p>
                </div>

            </div>

            <p className="text-slate-400 text-center mt-4">© 2023 Star Tech & Engineering Ltd | All rights reserved</p>


        </footer>
    )
}

export default Footer