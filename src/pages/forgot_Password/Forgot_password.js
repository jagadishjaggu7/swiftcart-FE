import React, { useState } from 'react';
import "./ForgotPassword.css";
import logo from "../../assests/logo.png";


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isErr, setError] = useState(false);
    const [emailErr, setEmailEr] = useState("")
    const [passwordErr, setPasswordEr] = useState("")
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError(true)
            console.log("email is not found")
            setEmailEr("enter your email ")
        }
        console.log('Email:', email);

        if (!Password) {
            setError(true)
            console.log("password should be strong atleast 10 characters")
            setPasswordEr("password should be strong atleast 10 characters")
        }
        if (!confirmPassword) {
            setError(true)
            console.log("password should be strong atleast 10 characters")
            setConfirmPasswordErr("password should be strong atleast 10 characters")
        }
 
        if (Password !== confirmPassword) {
            setError(true)
            setPasswordEr("Password doesn't match")
            setConfirmPasswordErr("Password doesn't match")
        }

        console.log('Email:', email);
        console.log('Email:', Password);
        console.log('Email:', confirmPassword);
    };



    return (
        <div className='login-container'>
            <img src={logo} alt="logo" className='logo' />
            <h1 className='Login-shift'>Forgot Password for Shift Cart</h1>
            <p className='Login-shift1'>Reset Your Password for Shift Cart</p>
            <br />
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label>Email Address</label>
                    <input className='input'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="JOHN.DOE@COMPANY.COM"

                    />
                    <small className='validate-color'>{isErr ? emailErr : null}</small>

                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input className='input'
                        type="password"
                        id="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="***************"

                    />
                    <small className='validate-color'>{isErr ? passwordErr : null}</small>

                </div>

                {/* confirm-password */}

                <div className="input-group">
                    <label>Confirm Password</label>
                    <input className='input'
                        type="password"
                        id="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="***************"

                    />
                    <small className='validate-color'>{isErr ? confirmPasswordErr : null}</small>

                </div>


                <br />
                <button type="submit" className="login-button">Submit</button>


            </form>
        </div>


    )
}

export default ForgotPassword


