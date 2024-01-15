import React, { createContext } from 'react'
import all_product from "../assets/all_product"

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {all_product};

    return(
        <ShopContextProvider value={contextValue}>
            {props.children}
        </ShopContextProvider>
    )
}

export default ShopContextProvider;