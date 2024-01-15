import React from 'react'
import { useContext } from 'react'
import { ShopContext } from 'react'


export default function ShopCategory(){
    const {all_product} = useContext(ShopContext);
    return(
        <div className="shop-category">
            <img src={props.banner} alt="" />
        </div>
    )
}