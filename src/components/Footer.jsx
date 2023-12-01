import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <div class="social-container">
        <h3>Последвайте ни</h3>
        <a href="https://www.facebook.com/miro.chobanov/"
          className="youtube social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/miroslavchobanow/"
          className="youtube social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
  </div>
    )
}

export default Footer;