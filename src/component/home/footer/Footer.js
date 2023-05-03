import React from 'react';
import './Footer.css';

export default function Footer() {
  return (

    <div className='footer_contain'>


      <div className="image_container_footer row">

        <div className="banner_text_footer" >          

            <h1>Explore your Universe</h1>          

            <button type="button" className="btn btn-primary" style={{marginTop: "20px"}}>Explore</button>          
        </div>
      </div>

      <div className="footer_icons">

        
        <div className="footer_icons_text">

          <p style={{fontSize: "20px", fontWeight: 700}}>Follow Us</p>

        </div>
        <div className="footer_icons_area">

        <i className="fa-brands fa-facebook fa-xl" style={{marginLeft: "20px", color: "#3b5998"}}></i>
        <i className="fa-brands fa-linkedin fa-xl" style={{marginLeft: "20px", color: "#0A66C2"}}></i>
        <i className="fa-brands fa-instagram fa-xl" style={{marginLeft: "20px", color: "#cd0c63"}}></i>
        </div>


      </div>
    </div>



  )
}
