import React from "react";
import Logo from "../Assets/Logo.png";
import { FaInstagramSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

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
          <span>Sobre a FSH</span>
          <span>Cursos</span>
          <span>Formas de Ingresso</span>
          <span>Portais</span>
          <span>Documentos/Editais</span>
          <span>Ouvidoria</span>
          <span>Fale Conosco</span>
          <span>Trabalhe Conosco</span>
        </div>
        <div className="footer-section-columns">
          <span> +55 81 99744-4270</span>
          <span>atendimento.geral@fsh.edu.br</span>
          
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
