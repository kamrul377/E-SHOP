import React, { useState } from 'react'
import "./modal.scss"

import CancelIcon from '@mui/icons-material/Cancel';

const Modal = ({ visibility, closeModal, items }) => {

    // const {id,name,image,price,category} = items;

    // const [mal, setMal] = useState(items);
    const [quantity, setQuantity] = useState("1")
    const [totalPrice, setTotalPrice] = useState(quantity * 10);


    console.log(quantity)
    // const totalItems = Array.from(items);
    // console.log(totalItems)

    // console.log(mal.length)
    // console.log(mal)
    // console.log(mal.length)


    return (
        <>
            <div className="modal" style={{ display: visibility ? "block" : "none" }}>
                <div className="cart-box w-[80%] h-[90%] bg-white mx-auto my-3 p-2 rounded-md relative">


                    {/* for modal heading........ */}
                    <div className="heading text-white bg-gray-600 rounded shadow">
                        <h2 className='font-bold'>Cart Items</h2>
                        <div className="cancel-icon hover:text-gray-400 active:scale-75" onClick={() => closeModal(false)}>
                            <CancelIcon />
                        </div>

                    </div>

                    <div className="products">

                        {
                            items.length === 0 && <h3 className='text-slate-500 flex items-center justify-center h-1/2'>Cart is currently Empty..</h3>
                        }

                        {



                            items && items.map((val, i) => {
                                return (
                                    <div className="product shadow flex justify-between items-center" key={i}>
                                        <div className="img flex justify-center items-center">
                                            <img src={val.image} alt="" />
                                            <p>{val.name} </p>
                                        </div>

                                        <div className="category">
                                            {val.category}
                                        </div>
                                        <div className="quantity">
                                            <select onChange={(e) => setQuantity(e.target.value)}>
                                                <option>--quantity--</option>
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                                <option value="4">04</option>
                                                <option value="5">05</option>
                                            </select>
                                        </div>

                                        <div className="price">
                                            {val.price * quantity}
                                        </div>

                                    </div>
                                )
                            })



                        }


                    </div>


                    {/* <div className="checkout absolute bottom-0 left-0 bg-indigo-400 h-[100px] w-full m-3 fixed">
                        <button>
                            checkout
                        </button>
                    </div> */}


                </div>


            </div>
        </>
    )
}

export default Modal