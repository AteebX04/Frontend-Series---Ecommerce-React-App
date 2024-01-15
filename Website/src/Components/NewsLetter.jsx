import React from 'react'


export default function NewsLetter(){
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe To Out NewsLetter & Stay Updated</p>
            <div>
                <input type="email" placeholder='Your Email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}