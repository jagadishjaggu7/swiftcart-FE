// App Footer - Chai -  24 

import React from 'react';
import myImage from '../../assests/logo.png'
import "./AppFooter.css"


const AppFooter = () => {
  return (
    <div className='appfooter'>
      <div>
        <img src={myImage} alt='log' height={150} width={150} style={{ marginTop: 10, marginLeft: 10 }}
        />
        <p className='image-txt1'>SWIFT CART:WHERE FLAVOUR MEETS DELIGHT. EVERY BITE IS A</p>
        <p className='image-txt1'>JOURNEY OF PURE ENJOYMENT!</p>

        <p className='image-txt2'>COPYRIGHT - 2024. WEBSITE MADE BY greet labs pvt ltd. ALL RIGHTS RESEVERED.</p>
      </div>


      <div>
        {/* About US */}
        <h1 className='about'>About Us</h1>
        <br />
        <p className='about1'>OUR STORES</p>
        <br />
        <p className='about2'>TEAMS & CONDITIONS</p>
        <br />
        <p className='about3'>PRIVACY POLICY</p>
      </div>

      <div>
        {/* Contact  US */}
        <h1 className='contact'>Contact Us</h1>
        <p className='number'>+91-9491467216</p>
        {/* Email  US */}
        <h1 className='email'>EMAIL</h1>
        <p className='email-txt'>greetlabspvtltd@GMAIL.COM</p>
      </div>

      <div>
        {/* News Letter US */}
        <h1 className='newsletter'>NEWSLETTER</h1>
        <input className='input-Box' type="text" placeholder='ENTER EMAIL FOR LATEST NEWS' />
        <br />
        <button className='btn'>SEND</button>
      </div>

    </div>
  )
}

export default AppFooter
