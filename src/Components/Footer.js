import React from "react";
import Logo from "../Assets/Logo.png";
import { FaInstagramSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com/fshrecife/?hl=pt">
            <FaInstagramSquare className="navbar-cart-icon" />{" "}
          </a>
          <a href="https://br.linkedin.com/school/fshrecife/">
            <SiLinkedin className="navbar-cart-icon" />{" "}
          </a>
          <a href="https://www.youtube.com/@faculdadesantahelena/featured">
            <BsYoutube className="navbar-cart-icon" />{" "}
          </a>
          <a href="https://web.facebook.com/fshrecife/?locale=pt_BR&_rdc=1&_rdr">
           <FaFacebookF className="navbar-cart-icon" />{" "}
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <Link to="/sobre" style={{ textDecoration: 'none', color: 'inherit' }}><span>Sobre a FSH</span></Link>

          
          
          <a href="mailto:ouvidoria@fsh.edu.br" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Ouvidoria</span>
          </a>



          <a href="https://wa.link/4m0z6k" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Fale Conosco</span>
          </a>
        

          <a href="mailto:rh@fsh.edu.br" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Trabalhe Conosco</span>
          </a>


        </div>
        <div className="footer-section-columns">


        
          

          <a href="https://wa.link/4m0z6k" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span> +55 81 99744-4270</span>
          </a>

          <a href="mailto:atendimento.geral@fsh.edu.br" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Atendimento Geral</span>
          </a>
          
        </div>
        <div className="footer-section-columns">
          <a href="/terms-and-conditions" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Terms & Conditions</span>
          </a>
          <a href="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Privacy Policy</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
