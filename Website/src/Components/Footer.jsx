import React from 'react'
import footer_logo from "../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pintrest_icon from "../assets/pintrest_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>04's Shop</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-socials-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintrest_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 -All Rights Reserved</p>
            </div>
        </div>
    )
}