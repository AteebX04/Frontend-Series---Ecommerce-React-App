import React from 'react';


export default function LoginSignup(){
    return(
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have An Account <span>Login Here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}