import React, { useState } from 'react'
import item from '../src/Data/Data'
import UserContext from './Context/User.context';
import ShoppingCart from './components/ShoppingCart/Cart'



const HomePage = () => {
    const [items, setItems] = useState(item);
    return (

        <>
            <UserContext.Provider value={items}>


                
                <ShoppingCart cart={items} />
              



            </UserContext.Provider>
        </>
    )
}

export default HomePage