import React, { useState } from 'react'
import './cart.css'


// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'react-uuid'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Modal from '../Modal/Modal';



const Cart = ({ cart }) => {
    const [hover, setIshover] = useState(true);
    const [count, setCount] = useState(0);
    const [modalOpen, setIsmodalOpen] = useState(false);
    const [product, setProduct] = useState(cart);
    const [itemId, setItemId] = useState([]);
    const [selectItem, setSelectItem] = useState([])

    // console.log(modalOpen)

    const AddMakeToast = () => {
        toast("product added..");
        setCount(Number(count + 1));

        // <Modal item={item} />

    }


    const clickBtn = (item) => {
        setSelectItem((prevItem) => [...prevItem, item]);
        AddMakeToast()
    }

    const ExistsMakeToast = () => {
        toast("product already added..");
        // <Modal item={item} />

    }

    // console.log(selectItem.length)

    // console.log(selectItem)

    // const clickBtn = (item) =>  {
    //     setSelectItem((prevItem) => [...prevItem,item])}
    // }



    // for close the modal
    const closeModal = ({ val }) => {
        setIsmodalOpen(val)
    }

    return (

        <>

            <Modal visibility={modalOpen} closeModal={closeModal} items={selectItem} />

            <div className='box'>

                {
                    product.map((item, i) => {
                        return <div className="cart-box" key={uuid()}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">


                            <div className="cart-image">
                                <img src={item.image} alt={item.image} />
                            </div>

                            <div className="cart-details">
                                <p className='text'>MSI Optix G241V E2 24" FHD FreeSync IPS Esports Gaming Monitor</p>
                                <div className="price">
                                    <h2>${item.price}</h2>
                                    <span><del>${Number(item.price) + 50}</del></span>
                                </div>
                            </div>


                            {/* <button className='text-sm add-btn' onClick={() => setSelectItem((prevItem) => [...prevItem,item])}>Add to cart</button> */}


                            <button className='text-sm add-btn' onClick={() => clickBtn(item)}>Add to cart</button>

                            <ToastContainer
                                position="top-right"
                                autoClose={2000}
                                hideProgressBar
                                newestOnTop
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover={false}
                                theme="light"
                            />

                        </div>
                    })
                }

            </div>


            <div className="btn-cart" onClick={() => setIsmodalOpen(true)}>
                <AddShoppingCartIcon className='btn' />
                <span>cart</span>
                <div className="count absolute top-[-10px] right-[-5px] bg-orange-700 p-1 rounded-full text-[12px] w-5 h-5 text-center">
                    <p>{count}</p>
                </div>
            </div>

            {/* <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav> */}
        </>
    )
}

export default Cart

