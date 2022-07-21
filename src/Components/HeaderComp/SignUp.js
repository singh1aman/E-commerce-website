import React from 'react'
import css from "./SignUp.css"

export default function SignUp() {
  return (
    <div className='container'>
        <div className='maindiv'>
            <div className='logo'>
                <img  className='logoimg' src='./Images/logowhite.png'></img>

            </div>
            <div className='box'>
                <div className='signin'>Sign-In</div>
                <div className='email'>Email or mobile phone number</div>
                <div >
                    <input className='email-input' type="text" placeholder='email or phone'></input>
                </div>
                <div>
                    <button className='cont-btn'>continue</button>
                </div>
                <div className='tcdiv'>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </div><hr></hr>
                <button className='newaccount'>Create new account</button><br></br>
                <a className='needhelp'>Need help ?</a>

            </div>
        </div>
        <div className='bottomdiv'></div>
    </div>
  )
}
