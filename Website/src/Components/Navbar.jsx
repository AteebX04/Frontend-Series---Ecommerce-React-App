import React, { useContext, useRef } from 'react'
import { useState } from 'react' 
import { Link } from 'react-router-dom';

import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { ShopContext } from './ShopContext';
import nav_dropdown from '../assets/nav_dropdown.png'

export default function Navbar(){

    const[menu,setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = () =>{
        menuRef.current.classList.toggle('nav-men u-visible');
        e.target.classList.toggle('open')
    }

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>04's Shop</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => {setMenu("shop")}}> <Link style={{textDecoration:"none"}} to='/'>Shop</Link> {menu==="shop" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration:"none"}} to='/mens'>Men</Link> {menu==="mens" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration:"none"}} to='/womens'>Women</Link> {menu==="womens" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:"none"}} to='/kids'>Kids</Link> {menu==="kids" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>

    )
}