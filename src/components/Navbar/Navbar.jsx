import React from 'react'
import './navbar.css'
import RedeemIcon from '@mui/icons-material/Redeem';
import PersonIcon from '@mui/icons-material/Person';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useState } from 'react';

const Navbar = () => {
    const [search, setSearch] = useState("")
    console.log(search)
    return (
        <nav>
            <div className="navbar">
                <div className="logo my-3 cursor-pointer">
                    <img src="./images/eshop.png " alt=""/>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder='search items..' onChange={(e) => setSearch(e.target.value)} />
                </div>

                <div className="menu">
                    <div className="nav-selection-box">
                        <RedeemIcon />
                        <div className="text">
                            <h3>Offers</h3>
                            <small>Latest Offers</small>
                        </div>
                    </div>
                    <div className="nav-selection-box">
                        <ElectricBoltIcon className='blink' />
                        <div className="text">
                            <h3>Offers</h3>
                            <small>Latest Offers</small>
                        </div>
                    </div>
                    <div className="nav-selection-box">
                        <PersonIcon />
                        <div className="text">
                            <h3>Offers</h3>
                            <small>Latest Offers</small>
                        </div>
                    </div>
                    <button className='nav-btn'>New version</button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar