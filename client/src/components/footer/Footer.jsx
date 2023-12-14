import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <div class="social-container">
           
        <h3 color='yellow'>Последвайте ни</h3>
        <a href="https://www.facebook.com/miro.chobanov/"
          className="youtube social">
          <FontAwesomeIcon icon={faFacebook} size="4x" color='white'/>
        </a>
        <a href="https://www.instagram.com/miroslavchobanow/"
          className="youtube social">
          <FontAwesomeIcon icon={faInstagram} size="4x" color='white'/>
        </a>
  </div>
    )
}

export default Footer;